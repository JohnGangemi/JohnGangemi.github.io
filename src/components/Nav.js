import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Nav.css';

class Nav extends Component {
  render() {
    return(
      <div className="Nav">
        <ul className="Nav-items">
          <li><NavLink exact to='/' activeClassName="nav-active" className="Nav-item">home</NavLink></li>
          <li><NavLink to='/about' activeClassName="nav-active" className="Nav-item">about</NavLink></li>
          <li><NavLink to='/resume' activeClassName="nav-active" className="Nav-item">resume</NavLink></li>
          <li><NavLink to='/projects' activeClassName="nav-active" className="Nav-item">projects</NavLink></li>
          <li><NavLink to='/contact' activeClassName="nav-active" className="Nav-item">contact</NavLink></li>
        </ul>
        <div className="Nav-responsive" onClick={this.props.burger}>
          <FontAwesomeIcon className="Nav-icon" icon={faChevronDown} size="lg" color="rgb(40,40,40)"/>
          menu
        </div>
      </div>
    );
  }
}

export default Nav;
