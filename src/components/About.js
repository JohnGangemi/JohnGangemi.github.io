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
            Once enrolled into the University of South Florida, I obtained a B.S. 
            in Computer Engineering after four exhausting but rewarding years of 
            hard work and determination.
          </p>
          <div className="About-slides">
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={0.8}>
              <div className="About-slide">
                <img src={laptop} alt="Laptop"/>
                <div className="About-slide-content">
                  <h4>Programmer</h4>
                  <p>Honing skills through personal software and hardware projects.</p>
                </div>
              </div>
            </ScrollAnimation>
            <div className="About-slides-spacer"/>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={0.8}>
              <div className="About-slide">
                <div className="About-slide-content">
                  <h4>Musician</h4>
                  <p>Life-long musician and graduate Recording Engineer (FullSail University, 2007).</p>
                </div>
                <img src={strat} alt="Stratocaster Guitar"/>
              </div>
            </ScrollAnimation>
            <div className="About-slides-spacer"/>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={0.8}>
              <div className="About-slide">
                <img src={ram} alt="Computer Memory"/>
                <div className="About-slide-content">
                  <h4>Tech</h4>
                  <p>Computer enthusiast who enjoys building PCs and pushing the limits of the hardware.</p>
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
