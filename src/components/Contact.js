import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return(
        <div className="Contact" id="Contact">
            <div className="Contact-detail">
                <p className="Contact-text">Please reach out through any of the services listed below or visit LinkedIn where you can find a phone number and address.</p>
            </div>
            <div className="Contact-spacer-vertical"/>
            <div className="Contact-detail">
                <p className="Contact-title">Email</p>
                <p className="Contact-description">
                    JohnAGangemi@gmail.com
                </p>
            </div>
            <div className="Contact-spacer-vertical"/>
            <div className="Contact-detail">
                <p className="Contact-title">LinkedIn</p>
                <a className="Contact-link" href="https://www.linkedin.com/in/johnagangemi">https://www.linkedin.com/in/johnagangemi</a>
            </div>
            <div className="Contact-spacer-vertical"/>
            <div className="Contact-detail">
                <p className="Contact-title">GitHub</p>
                <a className="Contact-link" href="https://github.com/JohnGangemi">https://github.com/JohnGangem</a>
            </div>
        </div>
    );
  }
}

export default Contact;
