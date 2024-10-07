const numbers = [1, 1, 1, 2, 4, 5];
try {
  const count = countOccurrences(null, 5);
  console.log(count);
}
catch(e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (Array.isArray(array)) {
    return array.reduce((accumulator, current) => {
      const occurrence = (current === searchElement) ? 1 : 0;
      return accumulator + occurrence;
    }, 0);
  }
  else {
    throw new Error("Invalid array.");
  }
}
