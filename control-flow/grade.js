const marks = [80, 100, 80];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  for (const value of marks)
    sum += value;
  let avg = sum/marks.length;
  if (avg< 60)
    return 'F'
  else if (avg >= 60 && avg < 70)
    return 'D'
  else if (avg >= 70 && avg < 80)
    return 'C'
  else if (avg >= 80 && avg < 90)
    return 'B'
  else if (avg >= 90 && avg <= 100)
    return 'A'
}
