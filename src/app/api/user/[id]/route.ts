import mysql, { ConnectionOptions } from "mysql2/promise";
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/app/lib/jwt";

const access: ConnectionOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // accessToken 검사
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    });
  }

  console.log(params);
  const connection = await mysql.createConnection(access);

  const id = Number(params.id);

  try {
    // MySQL2로 쿼리 실행
    const [userPosts] = await connection.query(
      `
        SELECT post.*, user.email, user.name 
        FROM post
        JOIN user ON post.user_id = user.id
        WHERE user.id = ?;
      `,
      [id]
    );

    connection.end();

    // 결과 반환
    return NextResponse.json({ success: true, data: userPosts });
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
