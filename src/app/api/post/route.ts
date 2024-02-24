import mysql, { ConnectionOptions } from "mysql2/promise";
import { NextRequest, NextResponse } from "next/server";

const access: ConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

interface TagItem {
  tag: string;
}

interface RequestBody {
  title: string;
  subTitle: string;
  categoryId: string;
  content: string;
  thumbnail: string;
  //   tags: TagItem[];
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body: RequestBody = await request.json();

    const categoryId = parseInt(body.categoryId, 10);
    if (isNaN(categoryId)) {
      throw new Error("categoryId must be a number");
    }

    const connection = await mysql.createConnection(access);

    let sql = `INSERT INTO post (categoryId, title, subTitle, content, thumbnail) VALUES (?, ?, ?, ?, ?)`;
    const values = [
      categoryId, // 변환된 숫자 사용
      body.title,
      body.subTitle,
      body.content,
      body.thumbnail,
    ];

    await connection.query("SET time_zone='+09:00'");
    await connection.query(sql, values);

    connection.end();
    return NextResponse.json({ success: true, data: { ...body, categoryId } });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
