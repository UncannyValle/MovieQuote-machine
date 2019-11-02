import React from "react";
import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [],
      quoteIndex: null,
    };
    this.chooseQuoteIndex = this.chooseQuoteIndex.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.clicker = this.clicker.bind(this);
    // this.chosenQuote = this.chosenQuote.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/vilaboim/movie-quotes/e72e64502486d9d9d528277a1dbe94f20f011bc6/movie-quotes.json"
    )
      .then(data => data.json())
      .then(quoteList =>
        this.setState({ quoteList }, () => {
          this.setState({
            quoteIndex: this.chooseQuoteIndex()
          });
        })
      );
  }

  chooseQuoteIndex() {
    if (!this.state.quoteList.length) {
      return;
    }
    return Math.floor(Math.random() * this.state.quoteList.length - 1);
  }
  get chosenQuote() {
    if (
      !this.state.quoteList.length ||
      !Number.isInteger(this.state.quoteIndex)
    ) {
      return;
    }
    return (this.state.quoteList[this.state.quoteIndex]).match(/"(?:[^"\\]|\\.)*"/);
  }
clicker(){
  this.setState({
    quoteIndex: this.chooseQuoteIndex()
  })
}
  render() {
    return (
      <div className="App" id="quote-box">
        <Text quote={this.chosenQuote} />
        <Button buttonDisplayName={"Hit Me"} clickHandler={this.clicker} />
      </div>
    );
  }
}

export default App;
