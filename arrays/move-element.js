const numbers = [1,2,3,4];
const output = move(numbers, 3, 0);
console.log(output);

function move(array, index, offset) {
  if (index+offset >= array.length || index+offset < 0) {
    console.error("invalid offset");
    return [];
  }
  else if(offset > 0) {
    for (let i = index; i < index+offset; i++) {
      temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
    }
    return array;
  }
  else if(offset < 0) {
    for (let i = index; i > index+offset; i--) {
      temp = array[i];
      array[i] = array[i-1];
      array[i-1] = temp;
    }
    return array;
  }
  return array;
}
