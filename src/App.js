import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Bootstrap from "./components/Bootstrap";

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
      </div>
    );
  }
}

export default App;
