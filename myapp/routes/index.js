var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("main", { title: "ejs test입니다." }); //main은 파일명
});

module.exports = router;
