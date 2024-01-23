import mysql, { ConnectionOptions } from "mysql2/promise";

const access: ConnectionOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "blog",
};

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  try {
    const connection = await mysql.createConnection(access);

    let sql = "SELECT * FROM blog";

    // 쿼리 실행
    const [rows, fields] = await connection.execute(sql);

    connection.end();
    console.log("rows 123", rows);
    // HTTP 응답을 반환
    return Response.json({ data: rows });
  } catch (err) {
    console.log(err);

    // 에러 상황에서도 적절한 응답을 반환
    return new Response("Internal Server Error", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
export async function POST(request: Request) {
  // mysql connection create or edit
  // fs.write()
}
export async function DELETE(request: Request) {
  // mysql connection delete
  // fs.delete()
}
