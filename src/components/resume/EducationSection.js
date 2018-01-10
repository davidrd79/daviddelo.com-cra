import PropTypes from 'prop-types';
import React from 'react';

import ResumeSection from './ResumeSection';

const EducationSection = ({ data, title }) => {
  const educationData = data.schools.map((school, index) => {
    const { degree, graduationYear, location, major, name, startYear } = school;
    const line = `${name}, ${location} — ${degree}, ${major}, ${startYear}-${graduationYear}`;

    return (
      <li key={`school-${index}`}>{line}</li>
    );
  });

  return (
    <ResumeSection className="education">
      <header>
        <h2>{title}</h2>
      </header>

      <ol>
        {educationData}
      </ol>
    </ResumeSection>
  );
}

EducationSection.propTypes = {
  data: PropTypes.shape({
    schools: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      location: PropTypes.string,
      degree: PropTypes.string,
      major: PropTypes.string,
      startYear: PropTypes.number,
      graduationYear: PropTypes.number
    })).isRequired
  }),
  title: PropTypes.string.isRequired
};

export default EducationSection;
