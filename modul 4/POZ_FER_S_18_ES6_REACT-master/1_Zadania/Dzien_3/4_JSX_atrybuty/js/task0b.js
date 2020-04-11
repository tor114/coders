import React from "react";
import ReactDOM from "react-dom";

function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}

const a = genNumber();
const b = genNumber();

const answer = parseInt(prompt(`Sum of ${a} and ${b}?`));
const isAnswerCorrect = (answer === a + b);

ReactDOM.render(
  <h1 style={{backgroundColor: isAnswerCorrect ? 'green' : 'red'}}>
    { isAnswerCorrect ? 'Great answer' : 'Wrong answer' }
  </h1>,
  document.getElementById("app")
);
