import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/SideDrawer.css';

class SideDrawer extends Component {
  render() {
    let sideDrawerStyles = 'SideDrawer';
    if (this.props.action.visible) {
      sideDrawerStyles = 'SideDrawer SideDrawer-open';
    }

    return(
      <div className={sideDrawerStyles}>
        <div className="SideDrawer-content">
          <div className="SideDrawer-close" onClick={this.props.action.close}>
            <FontAwesomeIcon icon={faTimes} size="2x" color="#EEE"/>
          </div>
          <ul className="SideDrawer-items">
            <li><a className="SideDrawer-item" onClick={this.props.action.close} href='#about'>About</a></li>
            <li><a className="SideDrawer-item" onClick={this.props.action.close} href='#experience'>Experience</a></li>
            <li><a className="SideDrawer-item" onClick={this.props.action.close} href='#contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
