const numbers = [1,2,3,4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.lenght === 0) return undefined;
  return array.reduce((accumulator, current) => {
    return (accumulator < current) ? current : accumulator;
  });
}
