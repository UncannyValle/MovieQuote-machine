import React from "react";
import "./App.css";
import Button from "./components/Button";

class App extends React.Component {
  nextQuote() {
    console.log("hi");
  }
  render() {
    return (
      <div className="App" id="quote-box">
        <Button buttonDisplayName={"Hit Me"} clickHandler={this.nextQuote}/>
      </div>
    );
  }
}

export default App;
