const array = [1, 2, 4, '', null, 0, false, 9, true, 'xyz'];
let result = countTruthy(array);
console.log(result);

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) {
      count += 1;
    }
  }
  return count;
}
