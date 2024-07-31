//customer.js
const express = require("express");
const router = express.Router();
//db
const mysql = require("../mysql/pool.js");

//전체 조회 /board?page=1 => (page-1)*10 ->0 2->10
router.get("/", async (req, res) => {
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  let offset = (page - 1) * 10;
  let list = await mysql.query("boardList", offset);
  let total = await mysql.query("boardCount");
  res.send({ list, total: total[0].cnt });
});

//단건조회
router.get("/:boardid", (req, res) => {
  let boardid = req.params.boardid;
  //let sql = "select * from customer where ?"; //where 절에 조건이 없이 ?으로 넘기면 객체로 받아야된다.{}
  mysql.query("boardInfo", { boardid }).then((result) => res.send(result));
});

//등록
router.post("/", (req, res) => {
  mysql.query("boardInsert", req.body).then((result) => {
    if (result.affectedRows == 1) {
      res.send("success");
    } else {
      res.send("err");
    }
  });
});

//수정
router.put("/:boardid", (req, res) => {
  const boardid = req.params.boardid;

  mysql.query("boardUpdate", [req.body, boardid]).then((result) => {
    if (result.affectedRows == 1) {
      res.send("success");
    } else {
      res.send("err");
    }
  });
});

//삭제
router.delete("/:boardid", (req, res) => {
  let boardid = req.params.boardid;

  mysql
    .query("boardDelete", boardid)
    .then((result) => res.send(result))
    .catch(); //catch에 reject;
});
module.exports = router;
