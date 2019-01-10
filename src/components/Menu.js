import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/Menu.css';

class Menu extends Component {
  render() {
    return(
      <div className={this.props.action.open ? 'Menu Menu-open' : 'Menu'}>
        <div className="Menu-content">
          <div className="Menu-close" onClick={this.props.action.close}>
            <FontAwesomeIcon className="Menu-icon" icon={faTimes} size="2x" />
            close
          </div>
          <ul className="Menu-items">
            <li><NavLink exact to='/' className="Menu-item" activeClassName="menu-active" onClick={this.props.action.close} >home</NavLink></li>
            <li><NavLink to='/about' className="Menu-item" activeClassName="menu-active" onClick={this.props.action.close} >about</NavLink></li>
            <li><NavLink to='/resume' className="Menu-item" activeClassName="menu-active" onClick={this.props.action.close} >resume</NavLink></li>
            <li><NavLink to='/projects' className="Menu-item" activeClassName="menu-active" onClick={this.props.action.close} >projects</NavLink></li>
            <li><NavLink to='/contact' className="Menu-item" activeClassName="menu-active" onClick={this.props.action.close} >contact</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
