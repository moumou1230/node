//app.js
const express = require("express");
const app = express();
const port = 3000;
const boardRouter = require("./routes/board");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/board", boardRouter);

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
