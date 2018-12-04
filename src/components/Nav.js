import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.css';

class Nav extends Component {
  render() {
    return(
      <nav className="Nav">
        <div className="Nav-content">
          <Link className="Nav-logo" to='/'>John Gangemi</Link>
          <div>
            <div onClick={this.props.burgerClick}>
              <FontAwesomeIcon className="Nav-burger" icon={faBars} size="lg" color="#282c34"/>
            </div>
            <ul className="Nav-items">
              <li><Link className="Nav-item" to='/about'>about</Link></li>
              <li><Link className="Nav-item" to='/experience'>experience</Link></li>
              <li><Link className="Nav-item" to='/contact'>contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
