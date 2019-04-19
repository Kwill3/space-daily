import React, { Component } from 'react';
import './Apod.css';

import ApodRender from './ApodRender';
import ApodDateForm from './ApodDateForm';

const APOD_API_URL='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

class Apod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apodJson: {},
      apodPrev: '',
      currentDate: '',
    }
  }

  // Fetches daily APOD data
  componentDidMount = async() => {
    const json = await fetch(APOD_API_URL).then(response => response.json());;
    this.setState({
      apodJson: json,
      currentDate: json.date
    })
    console.log(json);
  }

  // Fetches new API data for APOD if a new date search is submitted
  handleChangeDate = e => {
    e.preventDefault();
    const newDate = e.target.elements.prevDate.value;
    this.setState({
      apodPrev: newDate
    }, async() => {
      const json = await fetch(`${APOD_API_URL}&date=${this.state.apodPrev}`).then(response => response.json());
      this.setState({
        apodJson: json
      })
      console.log(json);
    })      
  }
  
  render() {
    return (
      <div>
        <ApodRender handleApod={this.state.apodJson}/>
        <ApodDateForm changeDate={this.handleChangeDate} currDate={this.state.currentDate}/>
      </div>
    )
  }
}

export default Apod;
