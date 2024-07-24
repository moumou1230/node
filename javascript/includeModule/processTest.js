//includeModule/processTest.js

//명령행 인수
import { argv, env } from "node:process";

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

//console.log(env.Path); //for of 써서 돌리기
// 환경변수
for (let i of Object.keys(env)) {
  console.log(i, env[i]);
}
