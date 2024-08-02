const express = require("express");
const app = express();
const port = 80;

const cors = require("cors");

const customerRouter = require("./routes/customer2.js");
const bookRouter = require("./routes/book.js");
const boardRouter = require("./routes/board.js");

//미들웨어-----
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});
app.use("/customer", customerRouter);
app.use("/api/book", bookRouter);
app.use("/api/board", boardRouter);

//에러페이지 처리

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
