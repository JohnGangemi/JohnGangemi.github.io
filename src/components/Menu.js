import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Music from '../components/Music.js'
import Avatar from '../images/avatar-square.jpg'
import '../styles/Menu.css';

class Menu extends Component {
  render() {
    return(
      <div className={this.props.action.open ? 'Menu Menu-open' : 'Menu'}>
        <div className="Menu-header">
          <NavLink exact to='/' className="Menu-name" onClick={this.props.action.close}>J.Gangemi</NavLink>
          <img className="Menu-avatar" src={Avatar} alt="Avatar"/>
          <p className="Menu-text">
            computer engineer with an affinity for distributed systems, real-time sensing, analytics, enterprise web services, and hardware
          </p>
          <div className="Menu-social">
            <a href="https://www.linkedin.com/in/johnagangemi">
              <FontAwesomeIcon className="Menu-icon" icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://github.com/JohnGangemi">
              <FontAwesomeIcon className="Menu-icon" icon={faGithubSquare} size="2x"/>
            </a>
          </div>
          <Music/>
        </div>
        <div className="Menu-items">
          <NavLink exact to='/' activeClassName="menu-active" className={this.props.action.open ? 'Menu-item animate-home' : 'Menu-item'} onClick={this.props.action.close}>home</NavLink>
          <NavLink to='/about' activeClassName="menu-active" className={this.props.action.open ? 'Menu-item animate-about' : 'Menu-item'} onClick={this.props.action.close}>about</NavLink>
          <NavLink to='/resume' activeClassName="menu-active" className={this.props.action.open ? 'Menu-item animate-resume' : 'Menu-item'} onClick={this.props.action.close}>resume</NavLink>
          <NavLink to='/projects' activeClassName="menu-active" className={this.props.action.open ? 'Menu-item animate-projects' : 'Menu-item'} onClick={this.props.action.close}>projects</NavLink>
          <NavLink to='/contact' activeClassName="menu-active" className={this.props.action.open ? 'Menu-item animate-contact' : 'Menu-item'} onClick={this.props.action.close}>contact</NavLink>
        </div>
        <div className="Menu-close">
          <FontAwesomeIcon className="Menu-icon" icon={faTimes} size="3x" onClick={this.props.action.close}/>
        </div>
      </div>
    );
  }
}

export default Menu;
