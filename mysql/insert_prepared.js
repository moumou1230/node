//insert_prepared.js
const mysql = require("mysql2");

const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
};

let connection = mysql.createConnection(conn);
const name = "왕만두";
const email = "a@a.c";
const phone = "010-888-999";

let sql = `insert into customer set ?`; //?한개라서 객체로 받으면됨{ name, email, phone }
//let sql = `insert into customer (name, email, phone) values(?,?,?)`;//이거는 받을 때 [name, email, phone ] 배열로 받아야됨

connection.query(sql, { name, email, phone }, (err, result, fileds) => {
  console.log(result.affectedRows, result.insertId);
});

connection.end();
