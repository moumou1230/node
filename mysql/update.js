//update.js
const mysql = require("mysql2");

const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
};

let connection = mysql.createConnection(conn);
const id = 1;
const email = "asdfsdf@a.c";
const address = "대구";

let sql = `update  customer set email = '${email}',
                                address = '${address}'
            where id = ${id}`;

connection.query(sql, (err, result, fileds) => {
  console.log(result);
});

connection.end();
