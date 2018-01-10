import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    [
      <Helmet key="about-head">
        <title>daviddelo.com | About</title>
      </Helmet>,
      "About!"
    ]
  );
};

export default AboutPage;
