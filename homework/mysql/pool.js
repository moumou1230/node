const mysql = require("mysql2");
const sql = require("./board");

const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
  connectionLimit: 10,
};

let pool = mysql.createPool(conn);

function query(key, data) {
  return new Promise((resolve, reject) => {
    pool.query(sql[key], data, (err, result, fields) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
module.exports = { pool, query };