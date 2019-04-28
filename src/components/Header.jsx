import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {  
  render() {
    return (
      <div className='header'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/apod'>APOD</NavLink>
        <NavLink to='/rover'>Mars Rovers</NavLink>
      </div> 
    );
  }
}

export default Header;