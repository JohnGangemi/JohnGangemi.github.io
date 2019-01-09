import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Nav from '../components/Nav.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Resume from '../components/Resume.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contact.js';
import Menu from '../components/Menu.js';
import Wheel from '../components/Wheel.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      backgroundColor: 'none'
    };

    this.menuToogle = this.menuToogle.bind(this);
    this.menuClose = this.menuClose.bind(this);
    this.setBackgroundBlue = this.setBackgroundBlue.bind(this);
    this.setBackgroundGreen = this.setBackgroundGreen.bind(this);
    this.setBackgroundOrange = this.setBackgroundOrange.bind(this);
    this.setBackgroundRed = this.setBackgroundRed.bind(this);
  }

  menuToogle() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }

  menuClose() {
    this.setState({isMenuOpen: false});
  }

  setBackgroundGreen() {
    this.setState({backgroundColor: 'green'});
  }

  setBackgroundRed() {
    this.setState({backgroundColor: 'red'});
  }

  setBackgroundOrange() {
    this.setState({backgroundColor: 'orange'});
  }

  setBackgroundBlue() {
    this.setState({backgroundColor: 'blue'});
  }

  render() {
    const appBackgroundColor = this.state.backgroundColor;
    var backgroundStyle;
    switch (appBackgroundColor) {
      case 'green':
        backgroundStyle = {
          backgroundColor: 'rgb(204, 255, 204)'
        }
        break;
      case 'red':
        backgroundStyle = {
          backgroundColor: 'rgb(255, 204, 204)'
        }
        break;
      case 'orange':
        backgroundStyle = {
          backgroundColor: 'rgb(255, 235, 204)'
        }
        break;
      case 'blue':
        backgroundStyle = {
          backgroundColor: 'rgb(204, 204, 255)'
        }
        break;
      default: backgroundStyle = {}
    }

    return (
      <div className="App" style={backgroundStyle}>
        <Wheel position={{upperLeft: this.setBackgroundGreen, upperRight: this.setBackgroundRed, lowerRight: this.setBackgroundOrange, lowerLeft: this.setBackgroundBlue}} />
        <Nav burger={this.menuToogle} />
        <Menu action={{close: this.menuClose, open: this.state.isMenuOpen}} />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;
