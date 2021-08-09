import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import DarkMode from '../Utilities/darkMode.js';


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><Link to="/home" className='nav-link'>Home</Link></li>
        <li><Link to="/profile" className='nav-link'>Profile</Link></li>
        <li className='dropdown-list'>
          Dropdown
          <ul className='dropdown-content'>
            <li><Link to="/contact" className='nav-link drop-link'>Contact Me</Link></li>
            <li><Link to="" className='nav-link drop-link'>Placeholder</Link></li>
          </ul>
        </li>
      </ul>
      <ul>
        <li><DarkMode onClick={props.onClick} mode={props.mode} /></li>
      </ul>
    </nav>
  );
}

export default Nav;