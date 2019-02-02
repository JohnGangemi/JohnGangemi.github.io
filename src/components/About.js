import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Callout from '../components/Callout.js';
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
          <div className="About-callout">
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={0.8}>
              <Callout direction="right" 
                image={laptop} 
                imageAlt="Laptop" 
                text={{title:"Programmer", description:"Refining skills through software and hardware projects."}}/>
            </ScrollAnimation>
            <div className="About-callout-spacer"/>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={0.8}>
              <Callout direction="left" 
                image={strat} 
                imageAlt="Stratocaster Guitar" 
                text={{title:"Musician", description:"Life-long musician and graduate Recording Engineer (FullSail, 2007)."}}/>
            </ScrollAnimation>
            <div className="About-callout-spacer"/>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} duration={0.8}>
              <Callout direction="right" 
                image={ram} 
                imageAlt="Computer Memory" 
                text={{title:"Enthusiast", description:"Following the latest advancements in technology."}}/>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
