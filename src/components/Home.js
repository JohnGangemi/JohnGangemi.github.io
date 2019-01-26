import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import quantum from '../images/quantum-shadow.png'
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <div className="Home-wrapper">
          <h1 className="Home-title">
            J.Gangemi
          </h1>
          <h3 className="Home-text">
              computer engineer with an affinity for distributed systems, real-time sensing, analytics, enterprise web services, and hardware
          </h3>
          <div className="Home-social">
            <a href="https://www.linkedin.com/in/johnagangemi">
              <FontAwesomeIcon className="Home-icon" icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://github.com/JohnGangemi">
              <FontAwesomeIcon className="Home-icon" icon={faGithubSquare} size="2x"/>
            </a>
          </div>
        </div>
        <a href="https://ai.google/research/teams/applied-science/quantum-ai/">
          <img className="Home-image" src={quantum} alt="Google's Quantum Computer"/>
        </a>
      </div>
    );
  }
}

export default Home;
