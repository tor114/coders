// import React from "react";
// import ReactDOM from "react-dom";
//
// import person from './data/person';
//
// ReactDOM.render(
//   <ul>
//     <li>Name - { person.name }</li>
//     <li>Surname - { person.surname }</li>
//     <li>Title - { person.title }</li>
//     <li>Age - { person.age }</li>
//   </ul>,
//   document.getElementById("app")
// );

// for (const [key, value] of person.entries()) {
//   props.push(<li>{value}</li>)
// }

import React from "react";
import ReactDOM from "react-dom";

import person from './data/person';

ReactDOM.render(
  <ul>
    {Object.entries(person).map(
      ([key, value]) => <li key={key}>{ key } - { value }</li>
    )}
  </ul>,
  document.getElementById("app")
);
