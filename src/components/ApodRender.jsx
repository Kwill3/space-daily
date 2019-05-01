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
            <iframe title="apod-video" src={apodData.url} allowFullScreen/>
          </div>
        )
      } 
      // Else returns an image type media
      else {
        return (
          <img src={apodData.hdurl} alt="" className='apod-img' />
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
        <h2 className='apod-header'>APOD - Astronomy Picture of the Day</h2>
          <p className='apod-date'>{apodData.date}</p>
          <div className='apod-credits'>
            {media()}
            <p>{`Image Credits: ${credits}`}</p>
          </div>
          <div className='apod-content'>
            <h3>{apodData.title}</h3>
            <p>{apodData.explanation}</p>
          </div>
      </div>
    );
  }
}

export default ApodRender;
