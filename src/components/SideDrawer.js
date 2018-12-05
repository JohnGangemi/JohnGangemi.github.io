import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
        <div className="SideDrawer-close" onClick={this.props.action.click}>
          <FontAwesomeIcon icon={faTimes} size="2x" color="#282c34"/>
        </div>
        <ul className="SideDrawer-items">
          <li><Link className="SideDrawer-item" onClick={this.props.action.click} to='/about'>About</Link></li>
          <li className="SideDrawer-item-spacer"></li>
          <li><Link className="SideDrawer-item" onClick={this.props.action.click} to='/experience'>Experience</Link></li>
          <li className="SideDrawer-item-spacer"></li>
          <li><Link className="SideDrawer-item" onClick={this.props.action.click} to='/contact'>Contact</Link></li>
          <li className="SideDrawer-item-spacer"></li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer;
