//moduleTest/useTotal.js
// import total from "./totalModule.js";
// console.log(total(10, 20, 30, 40, 50));
// console.log(total(5, 6, 7));

import total, { findNum, filterNum } from "./totalModule.js";
let arr = [1, 2, 3, 10];
console.log(total(10, 20, 30, 40, 50));
console.log(total(5, 6, 7));
console.log(findNum(22, arr));
console.log(filterNum(2, arr));
