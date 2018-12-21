import React, { Component } from 'react';
import { Link, scrollSpy } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.css';

class Nav extends Component {
  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    return(
      <nav className="Nav">
        <div className="Nav-content">
          <Link className="Nav-logo"
            to="scroll-to-home"
            spy={true}
            smooth={true}
            duration={1000}>
              John Gangemi
          </Link>
          <div>
            <div onClick={this.props.burgerClick}>
              <FontAwesomeIcon className="Nav-burger" icon={faBars} size="lg" color="#EEE"/>
            </div>
            <ul className="Nav-items">
              <li>
                <Link className="Nav-item"
                  to="scroll-to-about"
                  activeClass="activated"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  isDynamic={true}>
                    About
                </Link>
              </li>
              <li>
                <Link className="Nav-item"
                  to="scroll-to-experience"
                  activeClass="activated"
                  spy={true}
                  smooth={true}
                  duration={1000}>
                    Experience
                </Link>
              </li>
              <li>
                <Link className="Nav-item"
                  to="scroll-to-contact"
                  activeClass="activated"
                  spy={true}
                  smooth={true}
                  duration={1000}>
                    Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
