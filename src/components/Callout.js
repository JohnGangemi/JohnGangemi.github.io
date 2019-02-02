import React, { Component } from 'react';
import '../styles/Callout.css';

class Callout extends Component {
  render() {
    return(
      <div className="Callout">
        {this.props.direction === 'right' ?
            <div className="Callout-wrapper">
                <img className="Callout-image" src={this.props.image} alt={this.props.imageAlt}/>
                <div className="Callout-spacer"/>
                <div className="Callout-text">
                    <h4 className="Callout-title">{this.props.text.title}</h4>
                    <p className="Callout-description">{this.props.text.description}</p>
                </div>
            </div>
            :
            <div className="Callout-wrapper">
                <div className="Callout-text">
                    <h4 className="Callout-title">{this.props.text.title}</h4>
                    <p className="Callout-description">{this.props.text.description}</p>
                </div>
                <div className="Callout-spacer"/>
                <img className="Callout-image" src={this.props.image} alt={this.props.imageAlt}/>
            </div>
        }
      </div>
    );
  }
}

export default Callout;
