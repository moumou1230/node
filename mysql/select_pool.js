//
const mysql = require("mysql2");

const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
  connectionLimit: 10,
};
//pool
let pool = mysql.createPool(conn);
//connection 가져오기(커넥션을 pool에 담아두기위해)
pool.getConnection((err, connection) => {
  //쿼리 실행
  connection.query("select * from customer", (err, results) => {
    if (err) console.log(err);
    console.log(results);
  });
  connection.release();
});
