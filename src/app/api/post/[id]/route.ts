import mysql, { ConnectionOptions } from "mysql2/promise";
import { NextRequest, NextResponse } from "next/server";

const access: ConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const connection = await mysql.createConnection(access);

    const id = Number(params.id);
    const categoryId = Number(body.categoryId);

    let sql = `UPDATE post
  SET categoryId = ?, 
      title = ?, 
      subTitle = ?, 
      content = ?, 
      thumbnail = ?
  WHERE id = ?;`;
    const values = [
      categoryId,
      body.title,
      body.subTitle,
      body.content,
      body.thumbnail,
      id,
    ];
    const [userPosts] = await connection.query(sql, values);

    connection.end();

    return NextResponse.json({ success: true, data: userPosts });
  } catch (err) {
    console.log(err);
  }
}
