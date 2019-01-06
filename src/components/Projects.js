import React, { Component } from 'react';
import Card from '../components/Card.js';
import design from '../images/design.jpg';
import algorithm from '../images/algorithm.jpg';
import arduinos from '../images/arduinos.jpg';
import bic from '../images/bic.jpg';
import asic from '../images/asic.jpg';
import audio from '../images/audio.jpg';
import app from '../images/app.jpg';
import '../styles/Projects.css';

class Projects extends Component {
  render() {
    return(
      <div className="Projects" id="projects">
        <div className="Projects-cards">
          <Card card={{image: design, imageAlt: "web design", title: "Portfolio Web Design", description: "Created/updated personal portfolio hosted on GitHub Pages using ReactJS and other libraries. Certain components such as this 'Card' were done from scratch using React concepts like State, Props, and Routers."}}/>
          <Card card={{image: algorithm, imageAlt: "neuron", title: "Genetic Algorithm", description: "First crack at using evolutionary inspired algorithms to generate optimized solutions for nonlinear optimization problems. My .NET application accepts a string as input and based on control parameters tries to recreate the input string according to a 'best-fit' estimation."}}/>
          <Card card={{image: arduinos, imageAlt: "arduinos", title: "Embedded System Competition", description: "Competition hosted by New York University challenged teams of undergraduate and graduate students to exploit the weaknesses of a homomorphic cryptosystem and Ethernet network using a Xilinx FPGA."}}/>
          <Card card={{image: bic, imageAlt: "collaboration", title: "Bic Graphic Web App", description: "Development of a full-stack Java web application meant to replace expensive commercial administrative tools for Bic Graphic North America."}}/>
          <Card card={{image: asic, imageAlt: "wafer", title: "Thermometer ASIC", description: "Design of custom, 0.5 micron ASIC, that computed binary temperature data from an external sensor and converted the data to a Fahrenheit or Celsius decimal value per user selection."}}/>
          <Card card={{image: audio, imageAlt: "audio", title: "FPGA Audio System", description: "Design of a 5-track digital audio system with a textual user interface to assist in the recording, playback, deletion, and volume adjustment of individual audio tracks."}}/>
          <Card card={{image: app, imageAlt: "workspace", title: ".NET Applications", description: "Developed .NET Windows Forms applications using LINQ, interfaces, and lambda expressions."}}/>          
        </div>
      </div>
    );
  }
}

export default Projects;
