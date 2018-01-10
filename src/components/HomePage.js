import React from 'react';
import { Helmet } from 'react-helmet';

import './HomePage.css';

const HomePage = () => {
  return (
    [
      <Helmet key="home-head">
        <title>daviddelo.com</title>
      </Helmet>,
      "Homepage!"
    ]
  );
};

export default HomePage;
