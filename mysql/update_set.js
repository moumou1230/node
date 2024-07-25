//mysql/update_set.js
const mysql = require("mysql2");

const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
};

let connection = mysql.createConnection(conn);
const id = 7;
const email = "asdfsdf@a.c";
const address = "서울";

let sql = `update  customer set  ?
            where id = ?`;

connection.query(sql, [{ email, address }, id], (err, result, fileds) => {
  console.log(result);
});

connection.end();
