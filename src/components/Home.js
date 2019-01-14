import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <div className="Home-content">
          <div className="Home-fill"/>
          <p className="Home-text">
              computer engineer with an affinity for distributed systems, real-time sensing, analytics, enterprise web services, and hardware
          </p>
          <div className="Home-social">
            <a href="https://www.linkedin.com/in/johnagangemi">
              <FontAwesomeIcon className="Home-icon" icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://github.com/JohnGangemi">
              <FontAwesomeIcon className="Home-icon" icon={faGithubSquare} size="2x"/>
            </a>
          </div>
        </div>
        <div className="Home-image"/>
      </div>
    );
  }
}

export default Home;
