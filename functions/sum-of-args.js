console.log(sum(1,2,3,4,5))

function sum(...elements) {
  firstElement = elements[0];
  if (firstElement && Array.isArray(firstElement)) {
    return firstElement.reduce((a, b) => a+b);
  }
  else {
    return elements.reduce((a, b) => a+b);
  }

}
