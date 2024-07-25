//product.js
const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool.js");

router.get("/", function (req, res) {
  mysql.query("productList").then((result) => res.send(result));
});

router.get("/:prodnum", function (req, res) {
  const prodnum = req.params.prodnum;
  mysql.query("productGet", prodnum).then((result) => res.send(result));
});

router.post("/", function (req, res) {
  mysql.query("productInsert", req.body).then((result) => res.send(result));
});

router.put("/:prodnum", function (req, res) {
  const prodnum = req.params.prodnum;
  mysql
    .query("productUpdate", [req.body, { prodnum }])
    .then((result) => res.send(result));
});

router.delete("/:prodnum", function (req, res) {
  const prodnum = req.params.prodnum;
  mysql.query("productDelete", { prodnum }).then((result) => res.send(result));
});

module.exports = router;
