//fsTest.js
import fs from "fs";
fs.readFile("C:/temp/hw1.html", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  //console.log(data);
});
console.log("2. the end");

// let data1 = fs.readFileSync("C:/temp/hw1.html", "utf-8");
// console.log(data1.toString());

let data = fs.readFileSync("C:/temp/hw1.html");
console.log(data.toString());

//StringBuffer
