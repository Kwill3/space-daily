import React, { Component } from 'react';
import RoverImage from './RoverImage';
import RoverFilter from './RoverFilter';
import './Rover.css';

class Rover extends Component {
  constructor(props){
    super(props);
    this.state = {
      roverChoice: 'curiosity',
      timeChoice: 'all',
      solChoice: 'none',
      dateChoice: 'none',
      cameraChoice: 'all',
      pageChoice: '1',
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      roverChoice: e.target.elements.rover.value,
      timeChoice: e.target.elements.time.value
    });
  }

  handleRover = (e) => {
    // Receives input change from component and sets state
    this.setState({
      roverChoice: e
    })
  }

  handleTime = (e) => {
    // Receives input change from component and sets state
    this.setState({
      timeChoice: e
    })
  }

  handleSol = (e) => {
    // Receives input change from subcomponent and sets state
    this.setState({
      solChoice: e
    })
  }

  handleDate = (e) => {
    // Receives input change from subcomponent and sets state
    this.setState({
      dateChoice: e
    })
  }

  handleCamera = (e) => {
    // Receives input change from subcomponent and sets state
    this.setState({
      cameraChoice: e
    })
  }

  render() {
    return (
      <div>
        <h2>Rover - Mars Rover Photos</h2>
        <p>See images collected by NASA's Mars Rovers, Curiosity, Opportunity and Spirit. Choose which rover to see pictures from and search by the Earth date they were taken on or even by Sol (Martian day/rotation). Each rover also has several cameras onboard that you can filter the results upon.</p>

        <RoverFilter rover={this.state.roverChoice} time={this.state.timeChoice} onRoverChange={this.handleRover} onTimeChange={this.handleTime} onSolChange={this.handleSol} onDateChange={this.handleDate} onCameraChange={this.handleCamera} />

        <RoverImage rover={this.state.roverChoice} time={this.state.timeChoice} sol={this.state.solChoice} date={this.state.dateChoice} camera={this.state.cameraChoice} page={this.state.pageChoice}/>
      </div>
    );
  }
}

export default Rover;