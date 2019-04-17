import React, { Component } from 'react';
import './RoverImage.css';

class RoverImage extends Component {
  render() {
    const apiData = this.props.handleImage;
    const renderImages = apiData.map((i) => { 
      return (
        <div>
          <img src={i} alt="" width="600" height="400" />
          <div className="desc">Add a description of the image here</div>
        </div>
      )

    } )
    return (
      <div>
        {renderImages}
      </div>
    );
  }
}

export default RoverImage;