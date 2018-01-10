import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import meImage from '../images/me.jpg';

const Navigation = () => {
  const navClasses = classNames('navigation');

  return (
    <nav className={navClasses}>
      <img src={meImage} alt="David Delo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
