import React from 'react';
import { Helmet } from 'react-helmet';

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
