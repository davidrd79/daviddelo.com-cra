import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import meImage from '../images/me.jpg';
import './Navigation.css';

const Navigation = () => {
  const navClasses = classNames('navigation');

  return (
    <nav className={navClasses}>
      <img className="logo" src={meImage} alt="David Delo" />

      <header>
        <h1>daviddelo.com</h1>
      </header>

      <ul>
        <li><NavLink activeClassName="selected" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="selected" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="selected" to="/resume">Resume</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
