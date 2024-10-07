const numbers = arrayFromRange(1,4);
console.log(numbers);

function arrayFromRange(min, max) {
  let result = [];
  for (let index = min; index <= max; index++) {
    result.push(index);
  }
  return result;

}
