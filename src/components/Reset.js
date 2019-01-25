import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import '../styles/Reset.css';

class Reset extends Component {
  render() {
    return(
        <div className={this.props.show ? "Reset show-reset" : "Reset"} onClick={this.props.scrollUp}>
            <FontAwesomeIcon className="Reset-icon" icon={faArrowAltCircleUp}/>
        </div>
    );
  }
}

export default Reset;
