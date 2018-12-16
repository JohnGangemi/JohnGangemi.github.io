import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import tower from '../images/cell_tower.png';
import cloud from '../images/cloud_development.png';
import chart from '../images/data_chart.png';
import web from '../images/web_service.png';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home" id="home">
        <div className="Home-content">
          <div className="Home-header">
            <p>Software Engineer with an affinity for</p>
          </div>
          <div className="Home-details">
            <div className="Home-detail">
              <img src={cloud} alt="cloud"/>
              <p>Distributed Systems</p>
            </div>
            <div className="Home-detail">
              <img src={tower} alt="tower"/>
              <p>Real-time Sensors</p>
            </div>
            <div className="Home-detail">
              <img src={chart} alt="chart"/>
              <p>Data Analytics</p>
            </div>
            <div className="Home-detail">
              <img src={web} alt="web"/>
              <p>Web Services</p>
            </div>
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
