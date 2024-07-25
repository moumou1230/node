//mysql/delete.js
const mysql = require("mysql2");

const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
};

let connection = mysql.createConnection(conn);
const id = 8;

let sql = `delete from customer
           where id = ?`;

connection.query(sql, id, (err, result, fileds) => {
  console.log(result);
});

connection.end();
