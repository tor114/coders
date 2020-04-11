import React from "react";
import ReactDOM from "react-dom";

import people from "./data/people";

const list = people.map((element) =>
  <div className="person" key={element.id}>
    <img src={ element.avatar } />
    <div className="info">
      <h1>{ element.title + element.name + element.surname }</h1>
      <p>{ element.bio }</p>
    </div>
  </div>
);

ReactDOM.render(
  <>
    {list}
  </>,
  document.getElementById("app")
);

