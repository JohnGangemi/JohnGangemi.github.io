import React, { Component } from 'react';
import '../styles/ProgressBar.css';

class ProgressBar extends Component {
  render() {
    const fillStyle = {
        width: this.props.fill
    };

    return(
      <div className="ProgressBar">
        <div className="ProgressBar-fill" style={fillStyle}/>
      </div>
    );
  }
}

export default ProgressBar;
