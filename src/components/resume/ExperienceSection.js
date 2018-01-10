import PropTypes from 'prop-types';
import React from 'react';

import JobRole from './JobRole';

const ExperienceSection = ({ title, data }) => {
  return (
    <section>
      <header>
        <h2>{title}</h2>
      </header>

      EXPERIENCE
      <JobRole company="LinkedIn" />
    </section>
  );
}

export default ExperienceSection;
