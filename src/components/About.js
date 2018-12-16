import React, { Component } from 'react';
import game from '../images/icon_game.png';
import guitar from '../images/icon_guitar.png';
import laptop from '../images/icon_laptop.png';
import shoe from '../images/icon_shoe.png';
import beer from '../images/icon_beer.png';
import '../styles/About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      showText: false,
      text: "Click a icon to learn more!"
    };

    this.setShowMore = this.setShowMore.bind(this);
    this.setLaptopText = this.setLaptopText.bind(this);
    this.setGuitarText = this.setGuitarText.bind(this);
    this.setShoeText = this.setShoeText.bind(this);
    this.setGameText = this.setGameText.bind(this);
    this.setBeerText = this.setBeerText.bind(this);
  }

  setShowMore() {
    this.setState(state => ({
      showMore: true
    }));
  }

  setLaptopText() {
    this.setState(state => ({
      showText: true,
      text: "Always honing my skills through personal software and hardware projects."
    }));
  }

  setGuitarText() {
    this.setState(state => ({
      showText: true,
      text: "Life-long musician and graduate Recording Engineer (FullSail University, 2007)."
    }));
  }

  setShoeText() {
    this.setState(state => ({
      showText: true,
      text: "Runner/jogger/walker/yada-yada..."
    }));
  }

  setGameText() {
    this.setState(state => ({
      showText: true,
      text: "Occasional gamer who appreciates the finer details of game design."
    }));
  }

  setBeerText() {
    this.setState(state => ({
      showText: true,
      text: "Craft beer and classic cocktail enthusiast who's not a trendy hipster."
    }));
  }

  render() {
    return(
      <div className="About" id="about">
        <div className="About-content">
          <div className="About-images">
            <div className="About-image" onClick={this.setLaptopText}>
              <img src={laptop} alt="laptop"/>
            </div>
            <div className="About-image" onClick={this.setGuitarText}>
              <img src={guitar} alt="guitar"/>
            </div>
            <div className="About-image" onClick={this.setShoeText}>
              <img src={shoe} alt="shoe"/>
            </div>
            <div className="About-image" onClick={this.setGameText}>
              <img src={game} alt="game"/>
            </div>
            <div className="About-image" onClick={this.setBeerText}>
              <img src={beer} alt="beer"/>
            </div>
          </div>
          <div className={this.state.showText ? 'About-section-visible' : 'About-section-hidden'}>
            <p>
              {this.state.text}
            </p>
          </div>
          <div className="About-more" onClick={this.setShowMore}>
            Read More
          </div>
          <div className={this.state.showMore ? 'About-section-visible' : 'About-section-hidden'}>
            <p>
              A passion for engineering and technology stems from a
              life-long background in music. Interaction with complex software
              and hardware systems on a daily basis as a recording engineer
              encouraged me to pursue a degree more inline with my career
              interests. I enrolled into the University of South Florida and
              obtained a BS in Computer Engineering after 4 exhausting but
              rewarding years of hard work.
            </p>
            <div className="About-text-spacer"/>
            <p>
              When I'm not tinkering with an Arduino or FPGA, I'm learning a
              new programming framework, recording/writing music, or keeping
              up with all things tech.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
