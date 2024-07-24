//exam2.js
let num1 = 10;
let num2 = 20;
let total = 25;
function numSum() {
  return new Promise((resolve, reject) => {
    if (total == num1 + num2) {
      resolve("정답");
    } else {
      reject("오답");
    }
  });
}
numSum()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

async function sumAwait() {
  let result = await numSum().catch((err) => err);
  console.log(result);
}
sumAwait();
