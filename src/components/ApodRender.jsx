import React, { Component } from 'react';
import './ApodRender.css';

class ApodRender extends Component {
  render() {
    const apodData = this.props.handleApod;
    let credits;

    // Returns video type if daily APOD is of video media
    const media = () => {
      if (apodData.media_type === 'video') {
        return (
          <div className="video-container">
          <iframe title="apod-video" width="853" height="480" src={apodData.url} frameBorder="0" allowFullScreen/>
          </div>
        )
      } 
      // Else returns an image type media
      else {
        return (
          <img src={apodData.hdurl} alt="" />
        )
      }
    }

    // Credits original author, if available
    if (apodData.hasOwnProperty('copyright')){
      credits = apodData.copyright;
    } 
    // Else credit goes to public domain
    else {
      credits = 'Public Domain';
    }

    return (
      <div className='apod-wrapper'>
        <h2>APOD - Astronomy Picture of the Day</h2>
          <p>{apodData.date}</p>
          <div>
            {media()}
            <p>{`Image Credits: ${credits}`}</p>
          </div>
          <div>
            <h3>{apodData.title}</h3>
            <p>{apodData.explanation}</p>
          </div>
      </div>
    );
  }
}

export default ApodRender;
