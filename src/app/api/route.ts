import mysql, { ConnectionOptions } from "mysql2/promise";
import { NextRequest, NextResponse } from "next/server";

const access: ConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: NextRequest) {
  try {
    const connection = await mysql.createConnection(access);

    let sql = "SELECT * FROM CATEGORY_TB";

    // 쿼리 실행
    const [result, fields] = await connection.query(sql);

    connection.end();

    // HTTP 응답을 반환
    return NextResponse.json({ data: result });
  } catch (err) {
    console.log(err);

    // 에러 상황에서도 적절한 응답을 반환
    return new NextResponse("Internal Server Error", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
export async function POST(request: NextRequest) {
  // mysql connection create or edit
  // fs.write()
}
export async function DELETE(request: NextRequest) {
  // mysql connection delete
  // fs.delete()
}
