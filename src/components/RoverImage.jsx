import React, { Component } from 'react';
import './RoverImage.css';

class RoverImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiUrl: [],
      apiRover: [],
      apiCamera: [],
      apiSol: [],
      apiDate: [],
      page: '1'
    }
  }

  // Sets the string to time query depending on 'this.props.time' value and then calls the API
  handleClick = () => {
    if (this.props.time === 'date') {
      const timeQuery = `earth_date=${this.props.date}`
      this.handleApiCall(timeQuery);
    } 
    else if (this.props.time === 'sol') {
      const timeQuery = `sol=${this.props.sol}`
      this.handleApiCall(timeQuery);
    }
    else {
      const timeQuery = `sol=none`;
      this.handleApiCall(timeQuery);
    }
  }

  handleApiCall = async(timeQuery) => {
    const json = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.rover}/photos?${timeQuery}&camera=${this.props.camera}&api_key=DEMO_KEY`).then(response => response.json());
    console.log(json);
    let arrUrl = []
    let arrRover = []
    let arrCamera = []
    let arrSol = []
    let arrDate = []

    // Push data from api into respective arrays
    for (let i = 0; i < json.photos.length; i++) {
      arrUrl.push(json.photos[i].img_src)
      arrRover.push(json.photos[i].rover.name)
      arrCamera.push(json.photos[i].camera.name)
      arrSol.push(json.photos[i].sol)
      arrDate.push(json.photos[i].earth_date)
    }

    // Capture each set of data separately since React child cannot contain objects or nested arrays
    this.setState({
      apiUrl: arrUrl,
      apiRover: arrRover,
      apiCamera: arrCamera,
      apiSol: arrSol,
      apiDate: arrDate
    });
  }

  render() {
    // Define function zip that concatenates each element from each set into an array
    const zip = (a1, a2, a3, a4, a5) => a1.map((x,i) => [x, a2[i], a3[i], a4[i], a5[i]])
    // Map states of arrays into image elements
    const renderImages = zip(this.state.apiUrl, this.state.apiRover, this.state.apiCamera, this.state.apiSol, this.state.apiDate).map((i) => { 
      return (
        <div>
          <img src={i[0]} alt="" width="600" height="400" />
          <div className="desc">Rover: {i[1]} Camera: {i[2]} Sol: {i[3]} Date: {i[4]}</div>
        </div>
      )
    } )

    return (
      <div>
        <div>
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </div>
        {renderImages}
      </div>
    );
  }
}

export default RoverImage;