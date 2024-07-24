// array.map, filter, sort,.....

let arr = [
  { username: "choi", dept: "개발", sal: 2000 },
  { username: "kim", dept: "인사", sal: 1000 },
  { username: "park", dept: "개발", sal: 3000 },
];
//username이 park 인 사원 (find)
let findResult = arr.find((emp) => emp.username == "park");
console.log("park: ", findResult);
//1.sal 1500이상인 사원 조회 filter
let result = arr.filter((value) => value.sal >= 1500);
console.log(result);

//2.급여 오름차순 sort
arr.sort(function (a, b) {
  return a.sal - b.sal;
});
console.log("급여순 :", arr);

//유저 이름 오름차순
arr.sort(function (a, b) {
  //((a,b)=> a.username == b.username ? 0:a.username>b.username?1:-1)
  if (a.username > b.username) {
    return 1;
  } else if (a.username == b.username) {
    return 0;
  } else {
    return -1;
  }
});
console.log("이름 정렬: ", arr);

//급여합계 reduce
let sum = 0; //초기값
let sum1 = arr.reduce((a, b) => a + b.sal, sum); //a는 result
console.log("합계", sum1);

let sum2 = arr.reduce((total, ele) => (total += ele.sal), 0);
console.log("합계2:", sum2);

//모든 사원 급여를 500 인상(map)
//let map1 = arr.map((x) => (x.sal += 500));
let map2 = arr.map((x) => {
  x.sal += 500;
  return x;
});
// let map2 = arr.map((emp) => {
//   return { ...emp, sal: emp.sal + 500 };
// });

console.log(map2);

//급여가 2000원 이상인 사람만 출력 filter map 같이 사용
let filterMapResult = arr
  .filter((value) => value.sal >= 1500)
  .map((x) => {
    //each 같이 배열을 반복
    return x.username;
  });
console.log("2000원 이상인 사원 이름 : ", filterMapResult);
