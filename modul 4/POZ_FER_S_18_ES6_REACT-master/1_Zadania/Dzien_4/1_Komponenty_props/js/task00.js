// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const Date = (props) => {
//   console.log("p", props);
//
//   if(props) {
//     const d = new Date();
//     console.log("d", d);
//     return <p>{props.format(d)}</p>
//   } else {
//     return <p>Loading...</p>
//   }
// };
//
// const polishFormat = (date) =>
//   `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
//
// const englishFormat = (date) =>
//   `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//
// const shortFormat = (date) =>
//   `${date.getMonth() + 1}-${date.getDate()}`;
//
// ReactDOM.render(
//   <>
//     <Date format={polishFormat}/>
//     <Date format={englishFormat}/>
//     <Date format={shortFormat}/>
//   </>
//   , document.querySelector('#app'));



import React from 'react';
import ReactDOM from 'react-dom';

const Date = (props) => {
 return <p>{props.format(3,4)}</p>;
};

const add = (a,b) => a + b;
const diff = (a,b) => a - b;
const mul = (a,b) => a * b;
const concat  = (a,b) => `${a} and ${b}`;

ReactDOM.render(
  <>
    <Date format={add}/>
    <Date format={diff}/>
    <Date format={mul}/>
    <Date format={concat}/>
    <Date format={Math.max}/>
  </>
  , document.querySelector('#app')
);