import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      showExtra: false,
      text: "Click icons to learn more!"
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
      showExtra: true,
      text: "Always honing my skills through personal software and hardware projects."
    }));
  }

  setGuitarText() {
    this.setState(state => ({
      showExtra: true,
      text: "Life-long musician and graduate Recording Engineer (FullSail University, 2007)."
    }));
  }

  setShoeText() {
    this.setState(state => ({
      showExtra: true,
      text: "Runner/jogger/walker/yada-yada..."
    }));
  }

  setGameText() {
    this.setState(state => ({
      showExtra: true,
      text: "Occasional gamer who appreciates the finer details of game design."
    }));
  }

  setBeerText() {
    this.setState(state => ({
      showExtra: true,
      text: "Craft beer and classic cocktail enthusiast who's not a trendy hipster."
    }));
  }

  render() {
    return(
      <div className="About" id="about">
        <div className="About-content">
          <div className="About-images">
            <div className="About-image laptop"  onClick={this.setLaptopText} />
            <div className="About-image guitar" onClick={this.setGuitarText} />
            <div className="About-image shoe" onClick={this.setShoeText} />
            <div className="About-image game" onClick={this.setGameText} />
            <div className="About-image beer" onClick={this.setBeerText} />
          </div>
          <div className={this.state.showExtra ? 'About-extra-visible' : 'About-extra-hidden'}>
            {this.state.text}
          </div>
          <div className="About-text">
            <p>
              A passion for engineering and technology stems from a
              life-long background in music. Interaction with complex software
              and hardware systems on a daily basis as a Recording Engineer
              encouraged the pursuit of another career path. Once enrolled into
              the University of South Florida, I obtained a B.S. in Computer
              Engineering after four exhausting but rewarding years of hard
              work and determination.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
