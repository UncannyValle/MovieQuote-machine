import React from "react";

const Quotes = (props) => {
  return (
    <>
      <p id="text">{props.chosenQuote ? props.chosenQuote : ""}</p>
      <p id="author">- {props.chosenAuthor ? props.chosenAuthor : ""}</p>
    </>
  );
};
export default Quotes;
