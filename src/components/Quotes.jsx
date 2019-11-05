import React from "react";
import Button from "./Button";

const Quotes = (props) => {
  return (<>
    <p id="text">{props.chosenQuote ? props.chosenQuote : ""}</p>
    <p id='author'>{props.chosenAuthor ? props.chosenAuthor : ""}</p>
    <Button buttonDisplayName={"Click Me For Movie Magic"} clickHandler={props.getQuote} />
  </>)
};
export default Quotes;
