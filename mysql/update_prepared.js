//mysql/update_prepared.js
const mysql = require("mysql2");

const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
};

let connection = mysql.createConnection(conn);
const id = 2;
const email = "asdfsdf@a.c";
const address = "서울";

let sql = `update  customer set email = ?,
                                address = ?
            where id = ?`;

connection.query(sql, [email, address, id], (err, result, fileds) => {
  console.log(result);
});

connection.end();
