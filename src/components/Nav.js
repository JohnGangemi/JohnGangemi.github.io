import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.css';

const links = {
  none: 'none',
  about: 'about',
  experience: 'experience',
  contact: 'contact'
}

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: links.none
    };

    this.resetActiveLink = this.resetActiveLink.bind(this);
    this.activateAboutLink = this.activateAboutLink.bind(this);
    this.activateExperienceLink = this.activateExperienceLink.bind(this);
    this.activateContactLink = this.activateContactLink.bind(this);
  }

  resetActiveLink() {
    this.setState(state => ({
      activeLink: links.none
    }));
  }

  activateAboutLink() {
    this.setState(state => ({
      activeLink: links.about
    }));
  }

  activateExperienceLink() {
    this.setState(state => ({
      activeLink: links.experience
    }));
  }

  activateContactLink() {
    this.setState(state => ({
      activeLink: links.contact
    }));
  }

  render() {
    return(
      <nav className="Nav">
        <div className="Nav-content">
          <a className="Nav-logo" href='#home' onClick={this.resetActiveLink}>John Gangemi</a>
          <div>
            <div onClick={this.props.burgerClick}>
              <FontAwesomeIcon className="Nav-burger" icon={faBars} size="lg" color="#EEE"/>
            </div>
            <ul className="Nav-items">
              <li><a className={this.state.activeLink === links.about ? 'Nav-item activated' : 'Nav-item'} href='#about' onClick={this.activateAboutLink}>About</a></li>
              <li><a className={this.state.activeLink === links.experience ? 'Nav-item activated' : 'Nav-item'} href='#experience' onClick={this.activateExperienceLink}>Experience</a></li>
              <li><a className={this.state.activeLink === links.contact ? 'Nav-item activated' : 'Nav-item'} href='#contact' onClick={this.activateContactLink}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
