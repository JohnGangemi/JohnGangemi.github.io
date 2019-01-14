import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import '../styles/Nav.css';

class Nav extends Component {
  render() {
    return(
      <div className="Nav">
        <ul className="Nav-items">
          <li><NavLink exact to='/' className="Nav-title">J.Gangemi</NavLink></li>
          <li className="Nav-apps">
            <FontAwesomeIcon className="Nav-icon" icon={faAdjust} onClick={this.props.theme}/>
            <FontAwesomeIcon className="Nav-icon" icon={faBars} onClick={this.props.burger}/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
