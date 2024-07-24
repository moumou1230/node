//user.js
const express = require("express");
const router = express.Router();

//http://localhost/member?page=1&search=choi
router.get("/", (req, res) => {
  //쿼리스트링
  const page = req.query.page;
  const search = req.query.search;
  const data = req.query; // java의 vo 객체
  //세션
  const email = req.session.email;
  //쿠키 읽기
  console.log("cookie: ", req.cookies.popupyn);
  //쿠키 저장
  res.cookie("email", email, { expires: new Date(Date.now() + 15000) });

  res.send(`user query: ${email}`);
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
