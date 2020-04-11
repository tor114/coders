function getAverage(...numbers) {
  return numbers.reduce((a,b) => a+b) / numbers.length;
}

console.log(getAverage(2, 4, 5, 6, 7, 79));