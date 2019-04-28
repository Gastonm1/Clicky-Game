import React, { Component } from "react";
import {Navbar, Jumbotron} from "react-bootstrap";

export default class Bootstrap extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Clicky Game</Navbar.Brand>
        </Navbar>
      
      <Jumbotron fluid>
     
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
    </Jumbotron>
    </div>
    )
  }
}
