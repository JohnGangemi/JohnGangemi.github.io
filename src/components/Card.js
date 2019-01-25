import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {
  render() {
    return(
      <div className="Card">
        <img className="Card-image" src={this.props.card.image} alt={this.props.card.imageAlt}/>
        <h4 className="Card-title">{this.props.card.title}</h4>
        <p className="Card-description">{this.props.card.description}</p>
      </div>
    );
  }
}

export default Card;
