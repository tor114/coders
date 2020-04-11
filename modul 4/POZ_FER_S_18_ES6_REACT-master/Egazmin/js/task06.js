import React from "react";
import ReactDOM from "react-dom";
import products from './data/products'

const Item = ({ name, price }) => <li>{name}, with price: {price}</li>;
const Products = ({ products }) => (
  <>
    <h2>Products list</h2>
    <ul>
      {products.map(p => <Item key={p.id} name={p.name} price={p.price}/>)}
    </ul>
  </>
);
const App = () => <Products products={products}/>;
/**
 * Nie modyfikuj kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  Products,
  Item
};