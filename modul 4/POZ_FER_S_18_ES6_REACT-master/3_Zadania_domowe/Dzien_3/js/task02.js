import React, {Component} from "react";
import ReactDOM from "react-dom";

const colors = [
  "red", "black", "green", "yellow", "orange"
];

ReactDOM.render(
  <div>{colors.join(', ')}</div>,
  document.getElementById("app")
);
