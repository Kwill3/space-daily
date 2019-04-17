import React, { Component } from 'react';
import './RoverFilter.css';

class RoverFilter extends Component {
  render() {
    return (
      <form onSubmit={this.props.formSubmit}>
        <fieldset>
          <legend>Please select the NASA Mars Rover:</legend>
          <div>
            <input type="radio" id="curiosity"
            name="rover" value="curiosity" defaultChecked />
            <label htmlFor="curiosity">Curiosity</label>

            <input type="radio" id="opportunity"
            name="rover" value="opportunity" />
            <label htmlFor="opportunity">Opportunity</label>

            <input type="radio" id="spirit"
            name="rover" value="spirit" />
            <label htmlFor="spirit">Spirit</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Please select the Earth date / Mars sol to filter photos up to:</legend>
          <div>
            <input type="radio" id="allTime"
            name="time" value="all" defaultChecked />
            <label htmlFor="all">All photos</label>

            <input type="radio" id="sol"
            name="time" value="sol" />
            <label htmlFor="sol">Mars Sol</label>

            <input type="radio" id="date"
            name="time" value="date" />
            <label htmlFor="date">Earth Date</label>
          </div>
          <div>
            <label htmlFor="marsTime">Mars Sol:</label>
            <input type="number" id="marsSol"
            name="marsTime" />

            <label htmlFor="earthTime">Earth Date:</label>
            <input type="date" id="earthDate"
            name="earthTime" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Please select the camera:</legend>
          <select name='camera'>
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
          <select>
            <option value="default" disabled>Select a camera</option>
            <option value="all">All Cameras</option>
            <option value="fhaz">FHAZ - Front Hazard Avoidance Camera</option>
            <option value="rhaz">RHAZ - Rear Hazard Avoidance Camera</option>
            <option value="navcam">NAVCAM - Navigation Camera</option>
            <option value="pancam">PANCAM - Panoramic Camera</option>
            <option value="minites">Mini-TES - Miniature Thermal Emission Spectrometer</option>
          </select>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default RoverFilter;