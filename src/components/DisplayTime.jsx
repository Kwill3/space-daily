import React, { Component } from 'react';
import './DisplayTime.css';

class DisplayTime extends Component {

  handleSol = (e) => {
    // Pass input change up to parent for state change
    this.props.onSolChange(e.target.value)
  }

  handleDate = (e) => {
    // Pass input change up to parent for state change
    this.props.onDateChange(e.target.value)
  }

  render() {
    const renderTime = () => {
      if (this.props.time === 'sol') {
        // Return this if Mars Sol is selected as filter
        return (
          <div>
            <label htmlFor="marsTime">Mars Sol:</label>
            <input type="number" id="marsSol" onChange={this.handleSol} />
          </div>
        ) 
      }
      else if (this.props.time === 'date') {
        // Return this if Earth Date is selected as filter
        return (
          <div>
            <label htmlFor="earthTime">Earth Date:</label>
            <input type="date" id="earthDate" onChange={this.handleDate} />
          </div>
        ) 
      }
      else {
        // Return nothing if All Photos is selected
        return null;
      }
    };
    

    return (
      <div className='display-time-box'>
        {renderTime()}
      </div>
    );
  }
}

export default DisplayTime;