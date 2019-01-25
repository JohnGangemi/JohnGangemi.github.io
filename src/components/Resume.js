import React, { Component } from 'react';
import '../styles/Resume.css';

class Resume extends Component {
    render() {
        return(
            <div className="Resume" id="Resume">
                <div className="Resume-wrapper">
                    <h2 className="Resume-tag">Resume</h2>
                    <div className="Resume-detail">
                        <h4>SRI International, 2016 - Present</h4>
                        <div className="Resume-hr"/>
                        <p>
                            Software Engineer in Advanced Technology and Science Division of SRI International. 
                            Supporting all aspects of web services in an agile environment utilizing the latest 
                            web technologies and advanced analytics platforms. Maintaining legacy systems and 
                            radar/sensor connectors. Assisted in architecture design of various software frameworks 
                            related to company intellectual property.
                            <br/><br/>
                            Participated in Internal Research and Development programs, Off-site technical demonstrations 
                            and client support, proposal acquisitions and proposal submissions, and white paper development.
                        </p>
                    </div>
                    <div className="Resume-spacer-vertical"/>
                    <div className="Resume-detail">
                        <h4>Bankers Financial Corporation, 2015</h4>
                        <div className="Resume-hr"/>
                        <p>
                            Developed a version control utility to track individual contributor stats for Bankers IT 
                            department using C# and Windows Forms framework. Assisted in the redesign and development of 
                            a corporate web application using ASP.NET and other web technologies.
                        </p>
                    </div>
                    <div className="Resume-spacer-vertical"/>
                    <div className="Resume-detail">
                        <h4>Undergraduate Research, 2015</h4>
                        <div className="Resume-hr"/>
                        <p>
                            Researched the design and synthesis of combinational feedback logic with FPGAs. In particular, 
                            I attempted to mitigate the complications that arise when modeling asynchronous combinational 
                            circuits in FPGA fabric and sought-out solutions from published scholarly journals, web articles, 
                            online forums, and professionals in the industry.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
