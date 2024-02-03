import mysql, { ConnectionOptions, RowDataPacket } from "mysql2/promise";
import { NextRequest, NextResponse } from "next/server";
import { signJwtAccessToken } from "@/app/lib/jwt";
import * as bcrypt from "bcrypt";

const access: ConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// interface User {
//   id: number;
//   email: string;
//   password: string;
// }

interface RequestBody {
  username: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const body: RequestBody = await request.json();
  //   const { email, password } = await request.json();
  const connection = await mysql.createConnection(access);

  try {
    const [users] = await connection.query<RowDataPacket[]>(
      "SELECT * FROM user WHERE email = ?",
      [body.username]
    );
    connection.end();

    if (users.length === 1) {
      const user = users[0];
      if (await bcrypt.compare(body.password, user.password)) {
        const { password: _, ...userWithoutPass } = user;

        // accessToken 추가
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
          ...userWithoutPass,
          accessToken,
        };

        return new Response(JSON.stringify(result));
      } else {
        // 비밀번호 불일치
        return new Response(JSON.stringify({ error: "Invalid credentials" }), {
          status: 401,
        });
      }
    } else {
      // 사용자를 찾을 수 없음
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
