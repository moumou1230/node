const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/user.js");
const productRouter = require("./routes/product.js");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
//미들웨어-----
app.use(cors()); //다른 포트의 내용 가져올때? 원래는 못들고온다.
app.use(express.static("public")); //정적 파일 제공?
app.use(express.urlencoded({ extended: false })); //위치는 route하기전에 해야되기때문에 가장위에(이것도 파싱)form 쪽
app.use(express.json()); //body에 있는 값들을 json 파싱
//app.use(morgan("combined"));
app.use(morgan(":date[iso] :method :url"));
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true,
      maxAge: 60000,
    },
    store: new fileStore(),
  })
);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/member", userRouter);
app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
