import React from "react";
import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [],
      quote: '',
      quoteIndex: null
    };
    this.chooseQuoteIndex = this.chooseQuoteIndex.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/vilaboim/movie-quotes/e72e64502486d9d9d528277a1dbe94f20f011bc6/movie-quotes.json"
    )
      .then(data => data.json())
      .then(quoteList => this.setState({ quoteList }));
  }

  chooseQuoteIndex() {
    this.setState({
      quoteIndex: Math.floor(Math.random() * this.state.quoteList.length - 1),
      quote: (this.state.quoteList[this.state.quoteIndex]).search(/\d/)
    });
    console.log(this.state.quote);
  }
  render() {
    return (
      <div className="App" id="quote-box">
        <Text />
        <Button
          buttonDisplayName={"Hit Me"}
          clickHandler={this.chooseQuoteIndex}
        />
      </div>
    );
  }
}

export default App;
