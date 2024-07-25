const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool");

router.get("/", (req, res) => {
  mysql.query("boardList").then((resylt) => res.send(result));
});

module.exports = router;
