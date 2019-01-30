import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import laptop from '../images/laptop.png';
import strat from '../images/strat.png';
import ram from '../images/ram.png';
import '../styles/About.css';

class About extends Component {
  render() {
    return(
      <div className="About" id="about">
        <div className="About-wrapper">
          <h2 className="About-tag">About</h2>
          <p className="About-text">
            A passion for engineering and technology stems from a
            life-long background in music. Interaction with complex software
            and hardware systems on a daily basis as a Recording Engineer
            encouraged the pursuit of another career path. 
            <br/><br/>
            I obtained a Bachelor of Science in Computer Engineering from the 
            University of South Florida in 2016 and have been gainfully employed 
            as a Software Engineer.
          </p>
          <div className="About-slides">
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={0.8}>
              <div className="About-slide">
                <img src={laptop} alt="Laptop"/>
                <div className="About-slide-content">
                  <h4>Programmer</h4>
                  <p>Refining skills through software and hardware projects.</p>
                </div>
              </div>
            </ScrollAnimation>
            <div className="About-slides-spacer"/>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={0.8}>
              <div className="About-slide">
                <div className="About-slide-content">
                  <h4>Musician</h4>
                  <p>Life-long musician and graduate Recording Engineer (FullSail, 2007).</p>
                </div>
                <img src={strat} alt="Stratocaster Guitar"/>
              </div>
            </ScrollAnimation>
            <div className="About-slides-spacer"/>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={0.8}>
              <div className="About-slide">
                <img src={ram} alt="Computer Memory"/>
                <div className="About-slide-content">
                  <h4>Enthusiast</h4>
                  <p>Following the latest achievements in technology.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
