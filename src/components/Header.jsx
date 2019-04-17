import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {  
  render() {
    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/apod'>APOD</NavLink>
        <NavLink to='/rover'>Rover</NavLink>
      </div> 
    );
  }
}

export default Header;