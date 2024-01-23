// // // app/api/documents/route.ts
import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import mysql, { ConnectionOptions } from "mysql2/promise";
import { v4 as uuid } from "uuid";
import resizedImageBufferHandler from "@/app/utils/resizedImageBuffer";

const access: ConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

async function uploadImageToS3(
  file: Buffer,
  fileName: string
): Promise<string> {
  const resizedImageBuffer = await resizedImageBufferHandler(file);

  const originalFileName = `category/${Date.now()}-${fileName}`;
  const newFileName = originalFileName.replace(".png", ".jpeg");
  const params = {
    Bucket: process.env.AMPLIFY_BUCKET,
    Key: newFileName,
    Body: resizedImageBuffer,
    ContentType: "image/jpeg",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  return params.Key;
}

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as Blob | null;
    if (!file) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }

    const mimeType = file.type;
    const fileExtension = mimeType.split("/")[1];

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadImageToS3(
      buffer,
      uuid() + "." + fileExtension
    );

    // db에 전송하는 코드
    const connection = await mysql.createConnection(access);

    let sql = `INSERT INTO TEST_TB (img) VALUES ('${fileName}');`;

    // 쿼리 실행
    const [result, fields] = await connection.query(sql);

    connection.end();
    console.log(result, fields);

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    console.error("Error uploading image:", error);
    NextResponse.json({ message: "Error uploading image" });
  }
}
