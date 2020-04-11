import React, { Component } from "react";
import ReactDOM from "react-dom";

// const MainInputForm = () => {
//   return (
//     <>
//       <input type={"text"} placeholder={"Type Name..."}/>
//       <button>Search</button>
//     </>
//   )
// };

class MainInputForm extends Component {
  render() {
    return (
      <>
        <input type={"text"} placeholder={"Type Name..."}/>
        <button>Search</button>
      </>
    );
  }
}

ReactDOM.render(
  <MainInputForm/>,
  document.getElementById("app")
);
