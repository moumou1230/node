//product.js
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  const category = req.query.category;
  const price = req.query.price;
  console.log(req.query);
  res.send(`product query ${category} ${price}`);
});

router.get("/:num", function (req, res) {
  const num = req.params.num;
  console.log(req.params);
  res.send(`product params ${num}`);
});

router.post("/", function (req, res) {
  const prodid = req.body.prodid;
  const prodname = req.body.prodname;
  const price = req.body.price;
  console.log(req.body);
  res.send(`post body ${prodid} ${prodname} ${price}`);
});

router.put("/:num", function (req, res) {
  const num = req.params.num;
  const data = req.body;
  const result = { ...data, num };
  res.send(result);
});

router.delete("/:num", function (req, res) {
  const num = req.params.num;
  res.send("delete product " + num);
});

module.exports = router;
