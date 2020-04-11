// const fn = function (city) {
//   return city.length;
// };
//
// const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski", "Poznań"];
//
// console.log(cities.map(fn));

const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski", "Poznań"];

console.log(cities.map(function (city) {
  return city.length;
}));


const foo = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

const foo2 = (a, b) => a > b ? a : b;