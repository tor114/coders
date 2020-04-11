import React from "react";
import ReactDOM from "react-dom";

const person = {
  name: "Natlia",
  surname: "Fancy",
  address: "At a long distance",
  postcode: "Unknown",
  city: "New York"
};

const UserDetails = ({name, surname, address, postcode, city}) => (
  <div className="card">
  <div>
    <h5>{name} {surname}</h5>
    <div>{address}</div>
    <div>{postcode} {city}</div>
  </div>
</div>);

const App = () => <UserDetails {...person}/>;

/**
 * Nie modyfikuj kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  UserDetails
};