import React, { Component } from 'react';
import avatar from '../images/avatar.png';
import '../styles/About.css';

class About extends Component {
  render() {
    return(
      <div className="About">
        <div className="About-content">
          <img src={avatar} className="About-avatar" alt="Avatar" />
          <div className="About-detail">
            <p>
              My enthusiasm for engineering and technology stems from a life-long
              background in music. Interaction with complex software and hardware
              systems on a daily basis as a recording engineer encouraged me to
              pursue a degree more inline with my career interests. I enrolled into
              the University of South Florida and obtained a BS in Computer
              Engineering after 4 exhausting but rewarding years of hard work.
            </p>
            <div className="About-detail-spacer"/>
            <p>
              Since then I have been engaged with software and hardware projects.
              When I'm not tinkering with an Arduino or FPGA ... I'm learning a new
              programming language, recording/writing music, or keeping up with all
              things tech.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
