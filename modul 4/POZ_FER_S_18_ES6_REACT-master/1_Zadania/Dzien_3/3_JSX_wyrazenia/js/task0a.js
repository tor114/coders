import React from 'react';
import ReactDOM from 'react-dom';

const a = parseFloat(prompt('A'));
const b = parseFloat(prompt('B'));

ReactDOM.render(
  <h1>Sum of {a} and {b} is {a + b}</h1>,
  document.getElementById('app')
);