import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import meImage from '../images/me.jpg';
import './Navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <Link to="/"><img className="logo" src={meImage} alt="David Delo" /></Link>

    <header>
      <h1><Link to="/">daviddelo.com</Link></h1>
    </header>
    
    <ul className="links">
      <li><NavLink activeClassName="selected" to="/about">About</NavLink></li>
      <li><NavLink activeClassName="selected" to="/resume">Resume</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;
