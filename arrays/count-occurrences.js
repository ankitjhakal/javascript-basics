const numbers = [1, 1, 1, 2, 4, 5];
const count = countOccurrences(numbers, 5);
console.log(count);

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
