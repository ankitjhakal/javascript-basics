showStars(10);

function showStars(rows) {
  for (let i = 0; i < rows; i++) {
    pattern = '';
    for (let j = 0; j < i+1; j++) pattern += '*';
    console.log(pattern);
  }
}
