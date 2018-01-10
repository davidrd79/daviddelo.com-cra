import PropTypes from 'prop-types';
import React from 'react';

import ResumeSection from './ResumeSection';

const SkillsSection = ({ title, data }) => {
  const skillsData = data.skills.map((skill, index) => {
    return (
      <li key={`skill-${index}`}>{skill}</li>
    );
  });

  return (
    <ResumeSection>
      <header>
        <h2>Skills</h2>
      </header>

      <ul>
        {skillsData}
      </ul>
    </ResumeSection>
  );
}

SkillsSection.propTypes = {
  data: PropTypes.shape({
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  title: PropTypes.string.isRequired
};

export default SkillsSection;
