import React, { Component } from "react";
import ReactDOM from "react-dom";

const ParentComponent = (props) => (
  <div className={"parent"}>
    <ChildComponent>
      <GrandchildComponent>
        {props.children}
      </GrandchildComponent>
    </ChildComponent>
  </div>
);

const ChildComponent = (props) => (
  <div className={"child"}>
    {props.children}
  </div>
);
const GrandchildComponent = (props) => (
  <div className={"grand-child"}>
    {props.children}
  </div>
);

const App = () => (
  <>
    <ParentComponent>
      <h1>It works!</h1>
    </ParentComponent>
  </>
);

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);


// const App = () => {
//   return (
//     <Wrapper title="I am the wrapper">
//       <Child body="Child component" />
//       <BoldChild body="Bold Child component" />
//     </Wrapper>
//   );
// };
//
// const Wrapper = (props) => {
//   return (
//     <div className="wrapper">
//       <h1>{props.title}</h1>
//       {props.children}
//     </div>
//   );
// };
//
// const Child = (props) => {
//   return <p>{props.body}</p>;
// };
//
// const BoldChild = (props) => {
//   return <strong>{props.body}</strong>;
// };