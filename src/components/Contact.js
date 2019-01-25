import React, { Component } from 'react';
import Avatar from '../images/avatar-square.jpg'
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return(
        <div className="Contact" id="Contact">
            <div className="Contact-wrapper">
                <h2 className="Contact-tag">Contact</h2>
                <div className="Contact-content">
                    <img className="Contact-avatar" src={Avatar} alt="Avatar"/>
                    <div className="Contact-details">
                        <div className="Contact-detail">
                            <h4>Email</h4>
                            <p className="Contact-description">JohnAGangemi@gmail.com</p>
                        </div>
                        <div className="Contact-spacer-vertical"/>
                        <div className="Contact-detail">
                            <h4>LinkedIn</h4>
                            <a className="Contact-link" href="https://www.linkedin.com/in/johnagangemi">https://www.linkedin.com/in/johnagangemi</a>
                        </div>
                        <div className="Contact-spacer-vertical"/>
                        <div className="Contact-detail">
                            <h4>GitHub</h4>
                            <a className="Contact-link" href="https://github.com/JohnGangemi">https://github.com/JohnGangemi</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Contact;
