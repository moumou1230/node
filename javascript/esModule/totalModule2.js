//esModule/totalModule2.js
export function total(fst, ...arr) {
  let result = arr.reduce((sum, ele) => (sum += ele), fst);

  return result;
}

export function findNum(num, arr) {
  return arr.find((ele) => ele == num);
}

export function filterNum(num, arr) {
  return arr.filter((ele) => ele > num);
}
