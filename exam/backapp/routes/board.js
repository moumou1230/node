const express = require("express");
const router = express.Router();
const mysql = require("../mysql/pool.js");

router.get("/", (req, res) => {
  mysql.query("boardList").then((result) => res.send(result));
});

router.get("/:no", (req, res) => {
  let no = req.params.no;
  mysql.query("replyGet", no).then((result) => res.send(result));
});

router.post("/", (req, res) => {
  mysql.query("boardInsert", req.body).then((result) => {
    if (result.affectedRows == 1) {
      res.send("success");
    } else {
      res.send("err");
    }
  });
});
router.put("/:no", (req, res) => {
  const no = req.params.no;

  mysql.query("boardUpdate", [req.body, no]).then((result) => {
    if (result.affectedRows == 1) {
      res.send("success");
    } else {
      res.send("err");
    }
  });
});
module.exports = router;
