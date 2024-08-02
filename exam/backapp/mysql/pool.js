//pool_promise.js
const mysql = require("mysql2");
const customersql = require("./customer_sql.js");
const booksql = require("./book_sql.js");
const boardsql = require("./board_sql.js");

const sql = { ...customersql, ...booksql, ...boardsql };

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

function query(key, data) {
  return new Promise((resolve, reject) => {
    //reject catch쪽으로 resolve 는 then쪽으로
    pool.query(sql[key], data, (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { pool, query };
