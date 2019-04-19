import React from 'react';
import './Nav.css';
import WhiteLogo from '../components/Login/Imgs/WhiteLogo.svg';


const Nav = () => {
  return (
    <nav>
      <a href="/home"><img className="WLogo" src={WhiteLogo} alt="Logo" /></a>
      <ul>
        <a href="/mytools" className="NavItem">My Tools</a>
        <a href="#" className="NavItem">Favorites</a>
        <a href="#" className="NavItem">Requests</a>
        <i className="fas fa-user-circle fa-lg" ></i>
      </ul>
    </nav>
  )
}

export default Nav;
