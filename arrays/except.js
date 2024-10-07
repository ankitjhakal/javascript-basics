const numbers = [1, 2, 2, 3, 4, 5];
console.log(except(numbers, [2,3]));

function except(array, excludeArr) {
  let res = [];
  for (let index = 0; index < array.length; index++) {
    if (!excludeArr.includes(array[index])) {
      res.push(array[index]);
    }
  }
  return res;

}
