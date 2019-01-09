import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar.js';
import '../styles/Resume.css';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            contentWidth: 0
        }

        this.setContentWidth = this.setContentWidth.bind(this);
    }
    
    componentDidMount() {
        this.setContentWidth();
        window.addEventListener("resize", this.setContentWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setContentWidth);
    }

    setContentWidth() {
        this.setState({
            contentWidth: this.ref.current.clientWidth
        })
    }

    render() {
        const currentContentWidth = this.state.contentWidth;
        const contentDivisionWidth = currentContentWidth / 3;

        return(
            <div className="Resume" id="Resume" ref={this.ref}>
                <div className="Resume-detail">
                    <p className="Resume-title">SRI International, 2016 - Present</p>
                    <ProgressBar fill={contentDivisionWidth}/>
                    <p className="Resume-description">
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
                    <p className="Resume-title">Bankers Financial Corporation, 2015</p>
                    <ProgressBar fill={contentDivisionWidth * 2}/>
                    <p className="Resume-description">
                        Developed a version control utility to track individual contributor stats for Bankers IT 
                        department using C# and Windows Forms framework. Assisted in the redesign and development of 
                        a corporate web application using ASP.NET and other web technologies.
                    </p>
                </div>
                <div className="Resume-spacer-vertical"/>
                <div className="Resume-detail">
                    <p className="Resume-title">Undergraduate Research, 2015</p>
                    <ProgressBar fill={currentContentWidth}/>
                    <p className="Resume-description">
                        Researched the design and synthesis of combinational feedback logic with FPGAs. In particular, 
                        I attempted to mitigate the complications that arise when modeling asynchronous combinational 
                        circuits in FPGA fabric and sought-out solutions from published scholarly journals, web articles, 
                        online forums, and professionals in the industry.
                    </p>
                </div>
            </div>
        );
    }
}

export default Resume;
