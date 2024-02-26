import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import resizedImageBufferHandler from "@/app/utils/resizedImageBuffer";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function uploadImageToS3(
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
