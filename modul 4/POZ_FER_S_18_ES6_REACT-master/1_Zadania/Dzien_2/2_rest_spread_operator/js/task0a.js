const arr = [1,2,3,4,5];

function sum(...numbers) {
  return numbers.reduce((a,b) => a+b);
}

console.log(sum(1,2)); // 3
console.log(sum(1,2,3)); // 6
console.log(sum(1,2,3,4)); // 6
console.log(sum(...arr));



const arr1 = ["Zosia", "Marcin", "Kamil"]; // Tablica 1
const arr2 = ["Ala", "Puszek", ...arr1, "Jan", "Karol" ]; // Tablica 2