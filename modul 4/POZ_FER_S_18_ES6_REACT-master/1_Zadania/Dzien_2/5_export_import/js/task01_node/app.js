const Square = require('./Square');

let square = new Square(2);
square.sayName();
console.log(square.area());
console.log(new Square().area());
console.log(square.constructor)
