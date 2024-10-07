let result = checkSpeed(75);
console.log(result);

function checkSpeed(speed) {
  if (typeof(speed) !== 'number' || speed <= 0)
    return "invalid number";
  if (speed <= 74)
    return "Ok";
  if (speed > 74) {
    points = Math.floor((speed - 70) / 5);
    if (points >= 12)
      return "Licence Suspended";
    return "Points: " + points;
  }
}
