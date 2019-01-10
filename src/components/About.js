import React, { Component } from 'react';
import Card from '../components/Card.js';
import Avatar from '../images/avatar-center.png';
import laptop from '../images/laptop.jpg';
import strat from '../images/strat.jpg';
import ram from '../images/ram.jpg';
import '../styles/About.css';

class About extends Component {
  render() {
    return(
      <div className="About" id="about">
        <div className="About-images">
          <img className="About-avatar" src={Avatar} alt="avatar"/>
        </div>
        <p className="About-text">
          A passion for engineering and technology stems from a
          life-long background in music. Interaction with complex software
          and hardware systems on a daily basis as a Recording Engineer
          encouraged the pursuit of another career path. 
          <br/><br/>
          Once enrolled into the University of South Florida, I obtained a B.S. 
          in Computer Engineering after four exhausting but rewarding years of 
          hard work and determination.
        </p>
        <div className="About-cards">
          <Card card={{image: laptop, imageAlt: "laptop", title: "Programmer", description: "Honing skills through personal software and hardware projects."}} />            
          <Card card={{image: strat, imageAlt: "guitar", title: "Musician", description: "Life-long musician and graduate Recording Engineer (FullSail University, 2007)."}} />
          <Card card={{image: ram, imageAlt: "memory", title: "Tech", description: "Computer enthusiast who enjoys building PCs and pushing the limits of the hardware."}} />                                   
        </div>
      </div>
    );
  }
}

export default About;
