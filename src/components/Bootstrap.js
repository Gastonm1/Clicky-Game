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
     
        <h1>Remember which image you selected</h1>
        <p>
          <strong>Gameplay: </strong>There are twelve (12) different images for you to select. You must select each image <strong>once</strong>. Once you select each image, the game will end. If you choose a previously selected image, you lose and the game will end. Best of luck.
        </p>
    </Jumbotron>
    </div>
    )
  }
}
