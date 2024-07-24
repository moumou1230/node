//moduleTest/useTotal2.js
// import total from "./totalModule.js";
// console.log(total(10, 20, 30, 40, 50));
// console.log(total(5, 6, 7));

import * as mymath from "./totalModule2.js";
let arr = [1, 2, 3, 10];
console.log(mymath.total(10, 20, 30, 40, 50));
console.log(mymath.total(5, 6, 7));
console.log(mymath.findNum(2, arr));
console.log(mymath.filterNum(2, arr));
