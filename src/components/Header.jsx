import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import './Header.css';
import logo from '../solar-system.png'

class Header extends Component {  
  render() {
    return (
      <div className='header'>
        <img src={logo} alt='logo' />
        <NavLink to='/space-daily/'>Home</NavLink>
        <NavLink to='/space-daily/apod'>APOD</NavLink>
        <NavLink to='/space-daily/rover'>Mars Rovers</NavLink>
      </div> 
    );
  }
}

export default Header;