import React from 'react';
import '../components/ApodDateForm.css';

const ApodDateForm = (props) => {
  return (
    <form className='apod-form' onSubmit={props.changeDate}>
      <p>Search previous APOD posts:</p>
      <input type="date" id="prev" name="prevDate" min="1995-06-16" max={props.currDate} />
      <button className='search-btn'>Search</button>
    </form> 
  );
}

export default ApodDateForm;