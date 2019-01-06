import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/Menu.css';

class Menu extends Component {
  render() {
    return(
      <div className={this.props.action.open ? 'Menu Menu-open' : 'Menu'}>
        <div className="Menu-content">
          <div className="Menu-close" onClick={this.props.action.close}>
            <FontAwesomeIcon icon={faTimes} size="2x" color="rgb(240, 240, 240)"/>
            close
          </div>
          <ul className="Menu-items">
            <li><Link className="Menu-item" onClick={this.props.action.close} to='/home'>home</Link></li>
            <li><Link className="Menu-item" onClick={this.props.action.close} to='/about'>about</Link></li>
            <li><Link className="Menu-item" onClick={this.props.action.close} to='/resume'>resume</Link></li>
            <li><Link className="Menu-item" onClick={this.props.action.close} to='/projects'>projects</Link></li>
            <li><Link className="Menu-item" onClick={this.props.action.close} to='/contact'>contact</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
