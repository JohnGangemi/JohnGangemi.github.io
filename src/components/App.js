import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Nav from '../components/Nav.js';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Resume from '../components/Resume.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contact.js';
import Menu from '../components/Menu.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };

    this.menuToogle = this.menuToogle.bind(this);
    this.menuClose = this.menuClose.bind(this);
  }

  menuToogle() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }

  menuClose() {
    this.setState({isMenuOpen: false});
  }

  render() {
    return (
      <div className="App">
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
