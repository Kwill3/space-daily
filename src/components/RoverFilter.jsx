import React, { Component } from 'react';
import './RoverFilter.css';
import DisplayCamera from './DisplayCamera';
import DisplayTime from './DisplayTime';

class RoverFilter extends Component {

  handleChangeTime = (e) => {
    this.props.onTimeChange(e.target.value);
  }

  handleChangeRover = (e) => {
    this.props.onRoverChange(e.target.value);
  }

  handleSol = (e) => {
    // Continue passing input from component up to parent for state change
    this.props.onSolChange(e);
  }

  handleDate = (e) => {
    // Continue passing input from component up to parent for state change
    this.props.onDateChange(e);
  }

  handleCamera = (e) => {
    // Continue passing input from component up to parent for state change
    this.props.onCameraChange(e);
  }

  render() {
    return (
      <form className='form-box'>
        <fieldset className='field-box'>
          <legend>Please select the NASA Mars Rover:</legend>
          <div className='rover-box'>
            <label htmlFor="curiosity">
              <input type="radio" id="curiosity" name="rover" value="curiosity" onChange={this.handleChangeRover} defaultChecked />
              Curiosity
            </label>

            <label htmlFor="opportunity">
              <input type="radio" id="opportunity" name="rover" value="opportunity" onChange={this.handleChangeRover} />
              Opportunity
            </label>

            <label htmlFor="spirit">
              <input type="radio" id="spirit" name="rover" value="spirit" onChange={this.handleChangeRover} />
              Spirit
            </label>
          </div>
        </fieldset>

        <fieldset className='field-box'>
          <legend>Please select the Earth date / Mars sol :</legend>
          <div className='time-box'>
            <label htmlFor="all">
              <input type="radio" id="allTime" name="time" value="all" onChange={this.handleChangeTime} defaultChecked />
              All photos
            </label>

            <label htmlFor="sol">
              <input type="radio" id="solTime" name="time" value="sol" onChange={this.handleChangeTime} />
              Mars Sol
            </label>

            <label htmlFor="date">
              <input type="radio" id="dateTime" name="time" value="date" onChange={this.handleChangeTime} />
              Earth Date
            </label>
          </div>
          <DisplayTime time={this.props.time} onDateChange={this.handleDate} onSolChange={this.handleSol}/>
        </fieldset>

        <fieldset className='field-box'>
          <legend>Please select the camera:</legend>
          <DisplayCamera rover={this.props.rover} onCameraChange={this.handleCamera}/>
        </fieldset>
      </form>
    );
  }
}

export default RoverFilter;