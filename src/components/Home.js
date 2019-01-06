import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import computer from '../images/computer-components.png';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <img className="Home-image" src={computer} alt={"Computer Hardware"}/>
        <div className="Home-content">
          <p className="Home-title">John Gangemi</p>
          <div className="Home-description">
            <p>
              computer engineer with an affinity for distributed systems, real-time sensing, analytics, enterprise web services, and hardware
            </p>
            <a href="https://www.linkedin.com/in/johnagangemi">
              <FontAwesomeIcon className="Home-icon" icon={faLinkedin} size="2x" color="rgb(40,40,40)"/>
            </a>
            <a href="https://github.com/JohnGangemi">
              <FontAwesomeIcon className="Home-icon" icon={faGithubSquare} size="2x" color="rgb(40,40,40)"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
