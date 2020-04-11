import React from "react";
import ReactDOM from "react-dom";

import people from "./data/people";

const peopleList = people.map(
  person => <div key={person.id}>{person.name}, {person.surname}</div>
);

ReactDOM.render(
  <>
    { peopleList }
  </>,
  document.getElementById("app")
);
