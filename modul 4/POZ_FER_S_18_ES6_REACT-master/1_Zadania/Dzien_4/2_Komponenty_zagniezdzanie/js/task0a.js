import React, {Component} from "react";
import ReactDOM from "react-dom";

const CurrencyConverter = ({from, to, value, rate}) => (
  <div>
    <strong>{value.toFixed(2)}</strong> {from} =>
    <strong>{(value * rate).toFixed(2)}</strong> {to}
  </div>
);

const money = {
  from: "EUR",
  to: "USD",
  value: 20,
  rate: 1.12275,
};

const App = () => <>
  <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
  <CurrencyConverter from="USD" to="PLN" value={400} rate={3.86} />
  <CurrencyConverter from="PLN" to="BTC" value={20000} rate={0.000035} />
  <CurrencyConverter {...money} />
</>;

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);