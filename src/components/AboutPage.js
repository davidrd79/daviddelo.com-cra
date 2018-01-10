import React from 'react';
import { Helmet } from 'react-helmet';

import './AboutPage.css';

const AboutPage = () => {
  return (
    [
      <Helmet key="about-head">
        <title>daviddelo.com | About</title>
      </Helmet>,
      "LinkedIn | Github"
    ]
  );
};

export default AboutPage;
