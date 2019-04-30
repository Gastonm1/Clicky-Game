import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Bootstrap from "./components/Bootstrap";
import Body from "./components/Body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bootstrap />
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
