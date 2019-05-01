import React, { Component } from 'react';
import './DisplayCamera.css';

class DisplayCamera extends Component {

  handleCameraChange = (e) => {
    // Pass input change up to parent for state change
    this.props.onCameraChange(e.target.value);
  }

  render() {
    const renderCamera = () => {
      if (this.props.rover === 'curiosity') {
        // Returns Curiosity-specific cameras
        return (
          <select onChange={this.handleCameraChange} className='curiosity-select'>
            <option value="default" disabled>Select a camera</option>

            <option value="">All Cameras</option>

            <option value="&camera=fhaz">FHAZ - Front Hazard Avoidance Camera</option>

            <option value="&camera=rhaz">RHAZ - Rear Hazard Avoidance Camera</option>

            <option value="&camera=mast">MAST - Mast Camera</option>

            <option value="&camera=chemcam">CHEMCAM - Chemistry and Camera Complex</option>

            <option value="&camera=mahli">MAHLI - Mars Hand Lens Imager</option>

            <option value="&camera=mardi">MARDI - Mars Descent Imager</option>

            <option value="&camera=navcam">NAVCAM - Navigation Camera</option>
          </select>
        )
      }
      else {
        // Returns Spirit and Opportunity-specific cameras
        return (
          <select onChange={this.handleCameraChange} className='spirit-select'>
            <option value="default" disabled>Select a camera</option>

            <option value="">All Cameras</option>

            <option value="&camera=fhaz">FHAZ - Front Hazard Avoidance Camera</option>

            <option value="&camera=rhaz">RHAZ - Rear Hazard Avoidance Camera</option>

            <option value="&camera=navcam">NAVCAM - Navigation Camera</option>

            <option value="&camera=pancam">PANCAM - Panoramic Camera</option>

            <option value="&camera=minites">Mini-TES - Miniature Thermal Emission Spectrometer</option>
          </select>
        )
      }
    }

    return (
      <div>
        {renderCamera()}
      </div>
    );
  }
}

export default DisplayCamera;