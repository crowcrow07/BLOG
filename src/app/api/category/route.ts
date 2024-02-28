import mysql, { ConnectionOptions } from "mysql2/promise";
import { NextRequest, NextResponse } from "next/server";

const access: ConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export async function GET(request: NextRequest) {
  try {
    const connection = await mysql.createConnection(access);

    let sql = "SELECT * FROM category";
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
