import React, { Component } from 'react';
import '../styles/Experience.css';

class Experience extends Component {
  render() {
    return(
      <div className="Experience">
        <div className="Experience-entries">
          <div className="Experience-entry">
            <p className="Experience-title">SRI International, 2016 - Present</p>
            <div className="Experience-description">
              <p>
                Software Engineer in Advanced Technology & Science Division of SRI
                International. Supporting all aspects of web services in an agile
                environment utilizing the latest web technologies and advanced
                analytics platforms. Maintaining legacy systems and radar/sensor
                connectors.
              </p>
              <div className="Experience-text-spacer"/>
              <p>
                Participated in Internal Research and Development programs, Off-site
                technical demonstrations and client support, proposal acquisitions
                and proposal submissions, and white paper development.
              </p>
            </div>
          </div>
          <div className="Experience-entry-spacer"/>
          <div className="Experience-entry">
            <p className="Experience-title">Bankers Financial Corporation, 2015</p>
            <div className="Experience-description">
              <p>
                Developed a version control utility to track individual contributor
                stats for Bankers IT department using C# and Windows Forms framework.
                Assisted in the redesign and development of a corporate web
                application using ASP.NET and other web technologies
              </p>
            </div>
          </div>
          <div className="Experience-entry-spacer"/>
          <div className="Experience-entry">
            <p className="Experience-title">Undergraduate Research, 2015</p>
            <div className="Experience-description">
              <p>
                Researched the design and synthesis of combinational feedback logic
                with FPGAs. In particular, I attempted to mitigate the complications
                that arise when modeling asynchronous combinational circuits in FPGA
                fabric and sought-out solutions from published scholarly journals,
                web articles, online forums, and professionals in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
