import React from 'react';
import './Nav.css';
import WhiteLogo from '../components/Login/Imgs/WhiteLogo.svg';


const Nav = () => {
  return (
    <nav>
      <img className="WLogo" src={WhiteLogo} atl="Logo" />
      <ul>
        <a href="#" className="NavItem">My Tools</a>
        <a href="#" className="NavItem">Favorites</a>
        <a href="#" className="NavItem">Requests</a>
        <i className="fas fa-user-circle fa-lg" ></i>
      </ul>
    </nav>
  )
}

export default Nav;
