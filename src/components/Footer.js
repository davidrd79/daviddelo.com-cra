import React from 'react';

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
