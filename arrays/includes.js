const numbers = [1,2,3,4,5];
console.log(includes(numbers, 6));

function includes(array, searchValue) {
  let res =  false;
  for (let index = 0; index < array.length; index++) {
    if (searchValue ==  array[index]) {
      res = true;
    }
  }
  return res;

}
