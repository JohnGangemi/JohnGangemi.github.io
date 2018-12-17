import React, { Component } from 'react';
import Nav from '../components/Nav.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Experience from '../components/Experience.js';
import Contact from '../components/Contact.js';
import SideDrawer from '../components/SideDrawer.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideDrawerOpen: false
    };

    this.sideDrawerToggle = this.sideDrawerToggle.bind(this);
    this.sideDrawerClose = this.sideDrawerClose.bind(this);
  }

  sideDrawerToggle() {
    this.setState(state => ({
      isSideDrawerOpen: !state.isSideDrawerOpen
    }));
  }

  sideDrawerClose() {
    this.setState({isSideDrawerOpen: false});
  }

  render() {
    return (
      <div className="App">
        <Nav burgerClick={this.sideDrawerToggle}/>
        <SideDrawer action={{close: this.sideDrawerClose, visible: this.state.isSideDrawerOpen}} />
        <Home/>
        <div className="App-image cpu"/>
        <About/>
        <div className="App-image keyboard"/>
        <Experience/>
        <div className="App-image working"/>
        <Contact/>
      </div>
    );
  }
}

export default App;
