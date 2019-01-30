import React, { Component } from 'react';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Resume from '../components/Resume.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contact.js';
import Reset from '../components/Reset.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showReset: false,
      windowHeight: 0,
      previousYOffset: 0,
      scrollThrottle: 75,
      intervalId: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.scrollStep = this.scrollStep.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  handleScroll(event) {
    var previousOffset = this.state.previousYOffset;
    var currentOffset = window.pageYOffset;
    var maxOffset = this.state.windowHeight;

    if (Math.abs(currentOffset - previousOffset) > this.state.scrollThrottle) {
      var trigger = (currentOffset > maxOffset && currentOffset < previousOffset) ? true : false;

      if (trigger !== this.state.showReset) {
        this.setState({
          showReset: trigger,
          previousYOffset: currentOffset
        });
      } else {
        this.setState({
          previousYOffset: currentOffset
        });
      }
    }
  }

  updateWindowDimensions() {
    this.setState({ windowHeight: window.innerHeight });
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 100);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep, 2.0);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <div className="App">
        <Home/>
        <About/>
        <Resume/>
        <Projects/>
        <Contact/>
        <Reset show={this.state.showReset} scrollUp={this.scrollToTop}/>
      </div>
    );
  }
}

export default App;
