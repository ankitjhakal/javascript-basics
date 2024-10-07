showPrimes(20);

function showPrimes(limit) {
  for (let i = 2; i < 20; i++) {
    if (i == 2 || i == 3) {
      console.log(i);
      continue;
    }
    let count = 0;
    for (let j = 2; j < i/2+1; j++) {
      if (i%j === 0) {
        count += 1;
      }
    }
    if (count < 1) {
      console.log(i);
    }
  }

}
