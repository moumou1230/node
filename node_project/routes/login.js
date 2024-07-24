//login.js
//login(get)
const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  const { email, pw } = req.query;
  console.log(email);
  req.session.email = email;
  req.session.save((err) => {
    if (err) throw err;
    else res.redirect("/member");
  });
});

//logout(get)
router.get("/logout", (req, res) => {
  res.send("logout");
});

module.exports = router;
