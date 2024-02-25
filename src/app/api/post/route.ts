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

interface PostRequestBody {
  title: string;
  subTitle: string;
  categoryId: string;
  content: string;
  thumbnail: string;
  //   tags: TagItem[];
}

interface DeleteRequestBody {
  id: number;
}

export async function GET(request: NextRequest) {
  try {
    const connection = await mysql.createConnection(access);
    let sql = "SELECT * FROM post";
    const [result, fields] = await connection.query(sql);

    connection.end();
    return NextResponse.json({ data: result });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body: PostRequestBody = await request.json();

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

    const [result, fields] = await connection.query(sql, values);

    console.log(result);

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

export async function DELETE(request: NextRequest, response: NextResponse) {
  try {
    const body: DeleteRequestBody = await request.json();
    const connection = await mysql.createConnection(access);
    let sql = `DELETE FROM post WHERE id = ?`;
    await connection.query(sql, body);

    connection.end();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
