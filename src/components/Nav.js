import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.css';

class Nav extends Component {
  render() {
    return(
      <nav className="Nav">
        <div className="Nav-content">
          <a className="Nav-logo" href='#home'>John Gangemi</a>
          <div>
            <div onClick={this.props.burgerClick}>
              <FontAwesomeIcon className="Nav-burger" icon={faBars} size="lg" color="#282c34"/>
            </div>
            <ul className="Nav-items">
              <li><a className="Nav-item" href='#about'>About</a></li>
              <li><a className="Nav-item" href='#experience'>Experience</a></li>
              <li><a className="Nav-item" href='#contact'>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
