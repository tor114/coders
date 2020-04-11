const {integrate, derivative} = require('./lib/math');

console.log(integrate(Math.sin, 0, Math.PI));
console.log(derivative(Math.exp, 1));