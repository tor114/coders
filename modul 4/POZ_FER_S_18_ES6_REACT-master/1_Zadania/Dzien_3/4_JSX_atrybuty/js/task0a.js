import React from "react";
import ReactDOM from "react-dom";

const imageUrl = "https://images.pexels.com/photos/1061588/pexels-photo-1061588.jpeg";

ReactDOM.render(
  <img src={imageUrl} alt={"my background"}/>,
  document.getElementById("app")
);
