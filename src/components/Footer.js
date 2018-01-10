import React from 'react';

import './Footer.css';

const Footer = () => {
  const currentYear = (new Date()).getFullYear();
  return (
    <footer className="footer">
      <ul>
        <li>&copy; {currentYear} daviddelo.com</li>
      </ul>
    </footer>
  );
}

export default Footer;
