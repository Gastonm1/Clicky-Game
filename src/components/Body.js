import React, { Component } from 'react';
// import images from '../images';

const selected = [];

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
  wendys: require("../images/wendys.jpg"),
}



export default class Body extends Component {
  render() {
    return (
      <div>
 <div class="flex-container">
  <div><img src={images.mcDonalds} alt="McDonalds"></img></div>
  <div><img src={images.blaze} alt="Blaze"></img></div>
  <div><img src={images.chik} alt="Chik-Fil-A"></img></div>
  <div><img src={images.chipotle} alt="Chipotle"></img></div>
  <div><img src={images.fiveGuys} alt="Five Guys"></img></div>
  <div><img src={images.freshii} alt="Freshii"></img></div>
  <div><img src={images.greekKitchen} alt="Greek Kitchen"></img></div>
  <div><img src={images.panera} alt="Panera Bread"></img></div>
  <div><img src={images.penn} alt="Penn Station"></img></div>
  <div><img src={images.popeyes} alt="Popeyes"></img></div>
  <div><img src={images.portillos} alt="Portillos"></img></div>
  <div><img src={images.wendys} alt="Wendys"></img></div>
</div> 
      </div>
    )
  }
}
