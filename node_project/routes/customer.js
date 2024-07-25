//customer.js
const express = require("express");
const router = express.Router();
//db
const mysql = require("mysql2");
const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
};

//전체 조회
router.get("/", (req, res) => {
  let connection = mysql.createConnection(conn);
  connection.query("select * from customer", (err, result) => {
    res.send(result);
  });
  connection.end();
});

//단건조회
router.get("/:id", (req, res) => {
  let connection = mysql.createConnection(conn);
  let id = req.params.id;
  let sql = "select * from customer where id =?";
  connection.query(sql, id, (err, result) => {
    res.send(result);
  });
  connection.end();
});

//등록
router.post("/", (req, res) => {
  let connection = mysql.createConnection(conn);
  let sql = "insert into customer set ?";
  connection.query(sql, req.body, (err, result) => {
    if (result.affectedRows == 1) {
      res.send("success");
    } else {
      res.send("err");
    }
  });
  connection.end();
});

//수정
router.put("/:id", (req, res) => {
  let connection = mysql.createConnection(conn);
  const id = req.params.id;
  const data = req.body;
  let sql = `update  customer set  ?
            where id = ?`;

  connection.query(sql, [data, id], (err, result, fileds) => {
    if (result.affectedRows == 1) {
      res.send("success");
    } else {
      res.send("err");
    }
  });
});

//삭제
router.delete("/:id", (req, res) => {
  let connection = mysql.createConnection(conn);
  let id = req.params.id;
  let sql = "delete from customer where id =?";
  connection.query(sql, id, (err, result) => {
    res.send(result);
  });
  connection.end();
});
module.exports = router;
