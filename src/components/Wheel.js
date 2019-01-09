import React, { Component } from 'react';
import blue from '../images/blue.png';
import red from '../images/red.png';
import green from '../images/green.png';
import orange from '../images/orange.png';
import '../styles/Wheel.css';

class Wheel extends Component {
  render() {
    return(
      <div className="Wheel">
        <img className="Wheel-upper-left" src={green} alt="green" onClick={this.props.position.upperLeft}/>
        <img className="Wheel-upper-right" src={red} alt="red" onClick={this.props.position.upperRight}/>
        <img className="Wheel-lower-right" src={orange} alt="orange" onClick={this.props.position.lowerRight}/>
        <img className="Wheel-lower-left" src={blue} alt="blue" onClick={this.props.position.lowerLeft}/>
      </div>
    );
  }
}

export default Wheel;
