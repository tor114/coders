import React from "react";
import ReactDOM from "react-dom";

const sign = prompt("Select + or -");

let content;

if(sign === "+") {
  content = <h1>You selected +</h1>
} else if(sign === "-") {
  content = <h2>You selected -</h2>
} else {
  content = <p>There is a problem</p>
}

ReactDOM.render(
  <React.Fragment style={{backgroundColor: '#bada55'}}>{ content }</React.Fragment>,
  document.getElementById("app")
);
