import React, {Component} from "react";
import ReactDOM from "react-dom";

const RandomNumbersList = ({list}) => <p>
  {list.join(', ')}
</p>;

const RandomNumbersInfo = ({min, max, count}) => <table>
  <tr><th>Min</th><td>{min}</td></tr>
  <tr><th>Max</th><td>{max}</td></tr>
  <tr><th>Count</th><td>{count}</td></tr>
</table>;

const RandomNumbers = (props) => {
  const {min, max, count} = props;
  const list = [...new Array(count)]
    .map(() => Math.floor(
      (Math.random() * (max - min + 1) + min))
    );

  return (
    <>
    <RandomNumbersInfo {...props}/>
    <RandomNumbersList list={list}/>
  </>
  );
};

const App = () => <RandomNumbers min={3} max={10} count={6}/>

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
