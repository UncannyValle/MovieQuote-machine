//Presentational component
import React from "react";
//stateless component does not need to be a class
const Button = ({ buttonDisplayName, clickHandler }) => (
  <button onClick={clickHandler} id="new-quote"class="btn btn-primary">
    {buttonDisplayName}
  </button>
);

export default Button;
