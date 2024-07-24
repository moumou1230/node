//user.js
const express = require("express");
const router = express.Router();

//http://localhost/member?page=1&search=choi
router.get("/", (req, res) => {
  const page = req.query.page;
  const search = req.query.search;
  const data = req.query; // java의 vo 객체

  res.send(`user query:  ${page} ${search}`);
});
//http://localhost/member/park
router.get("/:username", (req, res) => {
  const username = req.params.username;

  res.send("user get!!" + username);
});

router.post("/", (req, res) => {
  const username = req.body.username;
  const addr = req.body.addr;
  res.send(`user post  ${username} ${addr}`);
});

router.put("/:userid", (req, res) => {
  const userid = req.params.userid;
  //const data = req.body;
  const result = { ...req.body, userid };
  res.send(result);
});

router.delete("/:userid", function (req, res) {
  const userid = req.params.userid;
  res.send("uesr delete userid" + userid);
});

module.exports = router;
