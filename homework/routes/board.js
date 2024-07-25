const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool");

router.get("/", (req, res) => {
  mysql.query("boardList").then((result) => res.send(result));
});

router.get("/:boardid", (req, res) => {
  let boardid = req.params.boardid;
  mysql.query("boardGet", boardid).then((result) => res.send(result));
});

router.post("/", (req, res) => {
  mysql.query("boardInsert", req.body).then((result) => res.send(result));
});

router.put("/:boardid", (req, res) => {
  let boardid = req.params.boardid;
  mysql
    .query("boardUpdate", [req.body, boardid])
    .then((result) => res.send(result));
});

router.delete("/:boardid", (req, res) => {
  let boardid = req.params.boardid;
  mysql.query("boardDelete", boardid).then((result) => res.send(result));
});
module.exports = router;
