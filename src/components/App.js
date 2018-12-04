import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from '../components/Nav.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Experience from '../components/Experience.js';
import Contact from '../components/Contact.js';
import SideDrawer from '../components/SideDrawer.js';
import Dim from '../components/Dim.js';
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
    let dimRender;
    if (this.state.isSideDrawerOpen) {
      dimRender = <Dim close={this.sideDrawerClose}/>
    }

    return (
      <div className="App">
        <Nav burgerClick={this.sideDrawerToggle}/>
        <SideDrawer action={{click: this.sideDrawerClose, visible: this.state.isSideDrawerOpen}} />
        {dimRender}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/experience' component={Experience}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default App;
