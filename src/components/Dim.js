import React, { Component } from 'react';
import '../styles/Dim.css';

class Dim extends Component {
  render() {
    return(
      <div className="Dim" onClick={this.props.close} />
    );
  }
}

export default Dim;
