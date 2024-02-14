// import mysql, { ConnectionOptions } from "mysql2/promise";
// import { NextRequest, NextResponse } from "next/server";
// import * as bcrypt from "bcrypt";

// const access: ConnectionOptions = {
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// };

// interface RequestBody {
//   name: string;
//   email: string;
//   password: string;
// }

// export async function POST(request: NextRequest, response: NextResponse) {
//   try {
//     // db에 전송하는 코드
//     const body: RequestBody = await request.json();
//     const connection = await mysql.createConnection(access);
//     const hashPassword = await bcrypt.hash(body.password, 10);

//     const sql = `INSERT INTO user (name, email, password) VALUES (?, ?, ?)`;
//     const values = [body.name, body.email, hashPassword];

//     // 쿼리 실행
//     await connection.query(sql, values);

//     connection.end();

//     const { password, ...result } = body;

//     return NextResponse.json({ success: true, data: result });
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     NextResponse.json({ message: "Error uploading image" });
//   }
// }
