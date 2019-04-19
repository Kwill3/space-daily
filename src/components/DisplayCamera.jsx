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
        return (
          <select onChange={this.handleCameraChange}>
            <option value="default" disabled>Select a camera</option>

            <option value="all">All Cameras</option>

            <option value="fhaz">FHAZ - Front Hazard Avoidance Camera</option>

            <option value="rhaz">RHAZ - Rear Hazard Avoidance Camera</option>

            <option value="mast">MAST - Mast Camera</option>

            <option value="chemcam">CHEMCAM - Chemistry and Camera Complex</option>

            <option value="mahli">MAHLI - Mars Hand Lens Imager</option>

            <option value="mardi">MARDI - Mars Descent Imager</option>

            <option value="navcam">NAVCAM - Navigation Camera</option>
          </select>
        )
      }
      else {
        return (
          <select onChange={this.handleCameraChange}>
            <option value="default" disabled>Select a camera</option>

            <option value="all">All Cameras</option>

            <option value="fhaz">FHAZ - Front Hazard Avoidance Camera</option>

            <option value="rhaz">RHAZ - Rear Hazard Avoidance Camera</option>

            <option value="navcam">NAVCAM - Navigation Camera</option>

            <option value="pancam">PANCAM - Panoramic Camera</option>

            <option value="minites">Mini-TES - Miniature Thermal Emission Spectrometer</option>
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