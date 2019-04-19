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
      apiDate: []
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
    let arrUrl, arrRover, arrCamera, arrSol, arrDate = [];

    for (let i = 0; i < json.photos.length; i++) {
      arrUrl.push(json.photos[i].img_src)
      arrRover.push(json.photos[i].rover.name)
      arrCamera.push(json.photos[i].camera.name)
      arrSol.push(json.photos[i].sol)
      arrDate.push(json.photos[i].earth_date)
    }
    this.setState({
      apiUrl: arrUrl,
      apiRover: arrRover,
      apiCamera: arrCamera,
      apiSol: arrSol,
      apiDate: arrDate
    });
  }
  

  render() {
    const apiUrl = this.state.apiUrl;
    const renderImages = apiUrl.map((i) => { 
      return (
        <div>
          <img src={i} alt="" width="600" height="400" />
          <div className="desc">Add a description of the image here</div>
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