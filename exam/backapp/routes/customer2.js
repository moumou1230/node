//customer.js
const express = require("express");
const router = express.Router();
//db
const mysql = require("../mysql/pool.js");
//const sql = require("../mysql/customer_sql.js");
//전체 조회
router.get("/", (req, res) => {
  mysql.query("customerList").then((result) => res.send(result));
});

//단건조회
router.get("/:id", (req, res) => {
  let id = req.params.id;
  //let sql = "select * from customer where ?"; //where 절에 조건이 없이 ?으로 넘기면 객체로 받아야된다.{}
  mysql.query("customerGet", { id }).then((result) => res.send(result));
});

//등록
router.post("/", (req, res) => {
  mysql.query("customerInsert", req.body).then((result) => {
    if (result.affectedRows == 1) {
      res.send("success");
    } else {
      res.send("err");
    }
  });
});

//수정
router.put("/:id", (req, res) => {
  const id = req.params.id;

  mysql.query("customerUpdate", [req.body, id]).then((result) => {
    if (result.affectedRows == 1) {
      res.send("success");
    } else {
      res.send("err");
    }
  });
});

//삭제
router.delete("/:id", (req, res) => {
  let id = req.params.id;

  mysql
    .query("customerDelete", id)
    .then((result) => res.send(result))
    .catch(); //catch에 reject;
});
module.exports = router;
