import React from "react";
import "./App.css";
import Quotes from "./components/Quotes";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [],
      quoteIndex: null
    };
    this.chooseQuoteIndex = this.chooseQuoteIndex.bind(this);
    this.getQuote = this.getQuote.bind(this);
    // this.chosenQuote = this.chosenQuote.bind(this);
  }
// As soon as the page loads the API is fetched and state is set for a random quote to be displayed
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/vilaboim/movie-quotes/e72e64502486d9d9d528277a1dbe94f20f011bc6/movie-quotes.json"
    )
      .then(data => data.json())
      .then(quoteList => this.setState({ quoteList }, this.getQuote));
  }
  // Randomizes a number to be used as the index for going through quote API
  chooseQuoteIndex() {
    if (!this.state.quoteList.length) {
      return null;
    }
    return Math.floor(Math.random() * this.state.quoteList.length - 1);
  }
  //Function called upon click to get new quote
  getQuote() {
    this.setState({
      quoteIndex: this.chooseQuoteIndex()
    });
  }
  //Get Function that returns the randomized quote as an object, uses a regex that parses through the API quote and only returns the quote and not the author
  get chosenQuote() {
    if (
      !this.state.quoteList.length ||
      !Number.isInteger(this.state.quoteIndex)
    ) {
      return null;
    }
    return this.state.quoteList[this.state.quoteIndex].match(/^".*"/);
  }
  // Get Function that returns matching author for the quote, uses a regex so it only returns the author but also uses array methods to remove trailing (") before the author
  get chosenAuthor() {
    if (
      !this.state.quoteList.length ||
      !Number.isInteger(this.state.quoteIndex)
    ) {
      return null;
    } else {
      let authorWithQuotation = this.state.quoteList[
        this.state.quoteIndex
      ].match(/" .*$/);
      return authorWithQuotation[0]
        .split("")
        .slice(2)
        .join("");
    }
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <h1>Movie Quote Generator</h1>
        <Quotes
          chosenQuote={this.chosenQuote}
          getQuote={this.getQuote}
          chosenAuthor={this.chosenAuthor}
        />
      </div>
    );
  }
}

export default App;
