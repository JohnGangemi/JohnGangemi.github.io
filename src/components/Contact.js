import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return(
      <div className="Contact" id="contact">
        <div className="Contact-content">
          <div className="Contact-entries">
            <div className="Contact-entry">
              <p className="Contact-title">Email</p>
              <div className="Contact-description">
                <p>JohnAGangemi@gmail.com</p>
              </div>
            </div>
            <div className="Contact-entry-spacer"/>
            <div className="Contact-entry">
              <p className="Contact-title">LinkedIn</p>
              <div className="Contact-description">
                <p><a href="https://www.linkedin.com/in/johnagangemi">JohnAGangemi</a></p>
              </div>
            </div>
            <div className="Contact-entry-spacer"/>
            <div className="Contact-entry">
              <p className="Contact-title">GitHub</p>
              <div className="Contact-description">
                <p><a href="https://github.com/JohnGangemi">JohnGangemi</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
