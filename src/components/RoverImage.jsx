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
      apiId: [],
      currentPage: '1',
      imagesPerPage: 12
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

  handlePageClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  handleApiCall = async(timeQuery) => {
    const json = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.rover}/photos?${timeQuery}${this.props.camera}&api_key=DEMO_KEY`).then(response => response.json());
    console.log(json);
    console.log(`https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.rover}/photos?${timeQuery}${this.props.camera}&api_key=DEMO_KEY`);
    let arrUrl = []
    let arrRover = []
    let arrCamera = []
    let arrSol = []
    let arrDate = []
    let arrId = []

    // Push data from api into respective arrays
    for (let i = 0; i < json.photos.length; i++) {
      arrUrl.push(json.photos[i].img_src)
      arrRover.push(json.photos[i].rover.name)
      arrCamera.push(json.photos[i].camera.name)
      arrSol.push(json.photos[i].sol)
      arrDate.push(json.photos[i].earth_date)
      arrId.push(json.photos[i].id)
    }

    // Capture each set of data separately since React child cannot contain objects or nested arrays
    this.setState({
      apiUrl: arrUrl,
      apiRover: arrRover,
      apiCamera: arrCamera,
      apiSol: arrSol,
      apiDate: arrDate,
      apiId: arrId
    });
  }

  render() {
    // Define function zip that concatenates each element from each set into an array
    const zip = (a1, a2, a3, a4, a5, a6) => a1.map((x,i) => [x, a2[i], a3[i], a4[i], a5[i], a6[i]])
    // Zip states of arrays into nested array
    const zipImages = zip(this.state.apiUrl, this.state.apiRover, this.state.apiCamera, this.state.apiSol, this.state.apiDate, this.state.apiId)
    
    // Logic for displaying images
    const {currentPage, imagesPerPage} = this.state;
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexofFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = zipImages.slice(indexofFirstImage,indexOfLastImage);

    // Map nested array into image elements
    const renderImages = currentImages.map((i) => { 
      return (
        <div className='gallery' key={i[5]}>
          <a target="_blank" rel="noopener noreferrer" href={i[0]}>
            <img src={i[0]} alt="" width="600" height="400" />
          </a>
          <div className="desc">Rover: {i[1]}
            <br />Camera: {i[2]}
            <br />Sol: {i[3]}
            <br />Date: {i[4]}
          </div>
        </div>
      )
    })

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(zipImages.length / this.state.imagesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handlePageClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <div className='submit-btn'>
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </div>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        {renderImages}
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default RoverImage;