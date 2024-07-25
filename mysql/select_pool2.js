const mysql = require("./pool_promise.js");

let sql = "select * from customer";
// mysql.pool.query(sql, (err, results) => {
//   if (err) console.log(err);
//   console.log(results);
// });

mysql.query(sql).then((result) => console.log(result));
