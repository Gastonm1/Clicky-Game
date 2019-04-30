import React, { Component } from "react";
// import images from '../images';

const images = {
  mcDonalds: require("../images/McDs.jpeg"),
  blaze: require("../images/Blaze.jpg"),
  chik: require("../images/chic-fil-a.png"),
  chipotle: require("../images/Chipotle.png"),
  fiveGuys: require("../images/Five Guys.jpg"),
  freshii: require("../images/freshii.jpg"),
  greekKitchen: require("../images/Greek Kitchen.jpg"),
  panera: require("../images/Panera Bread.png"),
  penn: require("../images/Penn Station.jpeg"),
  popeyes: require("../images/Popeyes.jpg"),
  portillos: require("../images/portillos.gif"),
  wendys: require("../images/wendys.jpg")
};

export default class Body extends Component {
  state = {
    count: 0
  };

  handleSelected = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Click an Image of a Food Chain!</h2>
        <h3 className="text">Images selected: {this.state.count}</h3>
        <div class="flex-container">
          <div>
            <img
              src={images.mcDonalds}
              alt="McDonalds"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img src={images.blaze} alt="Blaze" onClick={this.handleSelected} />
          </div>
          <div>
            <img
              src={images.chik}
              alt="Chik-Fil-A"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img
              src={images.chipotle}
              alt="Chipotle"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img
              src={images.fiveGuys}
              alt="Five Guys"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img
              src={images.freshii}
              alt="Freshii"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img
              src={images.greekKitchen}
              alt="Greek Kitchen"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img
              src={images.panera}
              alt="Panera Bread"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img
              src={images.penn}
              alt="Penn Station"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img
              src={images.popeyes}
              alt="Popeyes"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img
              src={images.portillos}
              alt="Portillos"
              onClick={this.handleSelected}
            />
          </div>
          <div>
            <img
              src={images.wendys}
              alt="Wendys"
              onClick={this.handleSelected}
            />
          </div>
        </div>
      </div>
    );
  }
}
