import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-content">
          <div className="Home-header">
            <p>Software Engineer with an affinity for</p>
            <ul className="Home-header-list">
              <li>distributed systems</li>
              <li>real-time sensors</li>
              <li>data analytics</li>
              <li>web services</li>
            </ul>
          </div>
          <ul className="Home-social">
            <li>
              <a href="https://github.com/JohnGangemi">
                <FontAwesomeIcon className="Home-link" icon={faGithub} size="3x" color="#282c34"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/johnagangemi">
                <FontAwesomeIcon className="Home-link" icon={faLinkedinIn} size="3x" color="#282c34"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
