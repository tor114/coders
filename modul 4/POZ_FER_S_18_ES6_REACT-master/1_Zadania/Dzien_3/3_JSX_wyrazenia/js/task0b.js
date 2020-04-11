import React from "react";
import ReactDOM from "react-dom";

const birthDate = prompt('Birth date');

ReactDOM.render(
  <h1>Your age is { new Date().getFullYear() - birthDate }</h1>,
  document.getElementById("app")
);
