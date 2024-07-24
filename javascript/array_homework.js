//filename : array_homework.js
let arr = [
  { stdId: 1, kor: 90, eng: 80 },
  { stdId: 2, kor: 50, eng: 50 },
  { stdId: 3, kor: 90, eng: 90 },
];
//1.kor+eng 합계 순으로 sort
arr.sort((a, b) => {
  return a.kor + a.eng - (b.kor + b.eng);
});
console.log("성적순으로 정렬", arr);
//2.평균 60 미만인사람의 stdId만 출력 [2]
let std = arr
  .filter((a) => (a.kor + a.eng) / 2 < 60)
  .map((x) => {
    return x.stdId;
  });
console.log("60점 미만 stdId", std);
//3.map { stdId: 1, kor: 90, eng: 80, sum:170 }
arr.forEach((e) => {
  e.sum = e.kor + e.eng;
});

console.log(arr);
