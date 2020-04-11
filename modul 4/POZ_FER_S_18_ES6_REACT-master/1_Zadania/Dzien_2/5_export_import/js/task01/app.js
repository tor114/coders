// const Square = require('./Square');
import Square from "./Square";

let square = new Square(9);
square.sayName();
console.log(square.area());
console.log(new Square().area());
