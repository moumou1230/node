//select.js
const mysql = require("mysql2");

const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
};

let connection = mysql.createConnection(conn);

connection.query("select * from customer", (err, result) => {
  console.log(result);
});
connection.end();
