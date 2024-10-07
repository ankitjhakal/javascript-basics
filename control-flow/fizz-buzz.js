let result = fizzBuzz(-100);
console.log(result);

function fizzBuzz(input) {
  if (typeof(input) !== 'number')
    return "Not a number"
  else if (input !== 0 && input%3 === 0 && input%5 === 0)
    return "FizzBuzz";
  else if (input !== 0 && input%3 === 0 && input%5 !== 0)
    return "Fizz";
  else if (input !== 0 && input%3 !== 0 && input%5 === 0)
    return "Buzz";
  return input;
}
