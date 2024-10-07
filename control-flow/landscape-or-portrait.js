let result = isLandscape(30, 40);
console.log(result);

function isLandscape(width, height) {
  return width > height ? "Landscape" : "Portrait";
}
