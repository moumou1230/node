//insert.js
const pool = require("./pool_promise.js");

const name = "감자만두";
const email = "a@a.c";
const phone = "010-888-999";

let sql = `insert into customer (name, email, phone) values('${name}','${email}','${phone}')`;
pool.query(sql, (err, result, fileds) => {
  console.log(result.affectedRows, result.insertId);
});
