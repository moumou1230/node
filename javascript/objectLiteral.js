//객체 상수
let username = "Hello";
let temp = "  ";
let getName = function () {};
let obj = { username, hobby: [], addr: { zip: 50001, si: "대구" }, getName };

//구조 분해
let { addr, hobby } = obj; //밑에 두개랑 이거랑 같은 의미
//let addr = obj.addr;
//let hobby = obj.hobby;
console.log(addr.zip);

//배열 구조분해(...-->rest 연산자)
let score = [90, 80, 100, 50, 70];
let [fst, snd, ...rest] = score; //객체면 {}로 분해(rest쪽)
console.log(fst, snd, rest);
console.log(score);

//spread 연산자(객체복사)
//얕은 복사(배열)
let copyScore = score;
copyScore[0] = 10;
console.log(score[0], copyScore[0]);
//깊은 복사 (배열) : spread 연산자 이용
deepCopyScore = [...score];
deepCopyScore[0] = 50;
console.log(deepCopyScore[0], score[0]);

//객체 얕은 복사
let emp = { username: "choi", dept: "개발", sal: 5000 };
let copyEmp = emp;
copyEmp.sal = 1000;
console.log(emp.sal, copyEmp.sal);
//객체 깊은 복사
let deepCopyEmp = { ...emp, sal: 3000 };
//deepCopyEmp.sal = 3000;
console.log(emp, deepCopyEmp);
