const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool.js");

router.get("/", (req, res) => {
  mysql.query("bookList").then((result) => res.send(result));
});

router.get("/:no", (req, res) => {
  let no = req.params.no;
  mysql.query("bookGet", no).then((result) => res.send(result));
});

router.post("/", (req, res) => {
  mysql.query("bookinsert", req.body).then((result) => res.send(result));
});

router.put("/:no", (req, res) => {
  let no = req.params.no;
  mysql.query("bookupdate", [req.body, no]).then((result) => res.send(result));
});

router.delete("/:no", (req, res) => {
  let no = req.params.no;
  mysql.query("bookdelete", no).then((result) => res.send(result));
});
module.exports = router;
