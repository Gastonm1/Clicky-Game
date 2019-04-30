import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Bootstrap from "./components/Bootstrap";
import Body from "./components/Body"

//Counter State
// state = {
//   counter: 0
// };

// handleIncrememnt = () => {
//   this.setState({count: this.state.counter + 1});
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bootstrap />
        <Header />
        <Counter />
        <Body />
      </div>
    );
  }
}

export default App;
