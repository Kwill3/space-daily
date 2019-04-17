import React, { Component } from 'react';
import RoverImage from './RoverImage';
import RoverFilter from './RoverFilter';
import './Rover.css';

class Rover extends Component {
  constructor(props){
    super(props);
    this.state = {
      roverChoice: 'curiosity',
      timeChoice: 'sol',
      solChoice: 'none',
      dateChoice: 'none',
      cameraChoice: 'all',
      page: '1',
      apiData: []
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
      roverChoice: e.target.elements.rover.value,
      timeChoice: e.target.elements.time.value,
      solChoice: e.target.elements.marsTime.value,
      dateChoice: e.target.elements.earthTime.value,
      cameraChoice: e.target.elements.camera.value,
      }, 
      () => this.apiCallFunction()
    );
  }

  apiCallFunction = () => {
    if (this.state.timeChoice === 'date') {
      this.asyncDate();
    } 
    else if (this.state.timeChoice === 'sol') {
      this.asyncSol();
    } 
    else {
      this.asyncAll();
    };
  }

  asyncDate = async() => {
    console.log('date')
    const json = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.roverChoice}/photos?earth_date=${this.state.dateChoice}&api_key=DEMO_KEY&camera=${this.state.cameraChoice}`).then(response => response.json());
    console.log(json);
    let arr = [];
    for (let i = 0; i < json.photos.length; i++) {
      arr.push([json.photos[i].sol, json.photos[i].earth_date, json.photos[i].camera.name, json.photos[i].rover, json.photos[i].img_src])
    }
    this.setState({
      apiData: arr
    });
  };

  asyncSol = async() => {
    console.log('sol')
    const json = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.roverChoice}/photos?sol=${this.state.solChoice}&api_key=DEMO_KEY&camera=${this.state.cameraChoice}`).then(response => response.json());
    console.log(json);
    let arr = [];
    for (let i = 0; i < json.photos.length; i++) {
      arr.push(json.photos[i].img_src)
    }
    this.setState({
      apiData: arr
    });
  };

  asyncAll = async() => {
    console.log('all')
    const json = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.roverChoice}/photos?sol=none&api_key=DEMO_KEY&camera=${this.state.cameraChoice}`).then(response => response.json());
    console.log(json);
    let arr = [];
    for (let i = 0; i < json.photos.length; i++) {
      arr.push([json.photos[i].sol, json.photos[i].earth_date, json.photos[i].camera.name, json.photos[i].rover, json.photos[i].img_src])
    }
    this.setState({
      apiData: arr
    });
  };

  render() {
    return (
      <div>
        <h2>Rover - Mars Rover Photos</h2>
        <p>See images collected by NASA's Mars Rovers, Curiosity, Opportunity and Spirit. Choose which rover to see pictures from and search by the Earth date they were taken on or even by Sol (Martian day/rotation). Each rover also has several cameras onboard that you can filter the results upon.</p>
        <RoverFilter formSubmit={this.handleFormSubmit}/>
        <RoverImage handleImage={this.state.apiData}/>
      </div>
    );
  }
}

export default Rover;