function total(fst, ...arr) {
  let result = arr.reduce((sum, ele) => (sum += ele), fst);

  return result;
}
module.exports = total;
