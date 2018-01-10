import PropTypes from 'prop-types';
import React from 'react';

import ResumeSection from './ResumeSection';

import './SkillsSection.css';

const SkillsSection = ({ data, title }) => {
  const skillsData = data.skills.map((skill, index) => {
    return (
      <li key={`skill-${index}`}>{skill}</li>
    );
  });

  return (
    <ResumeSection className="skills">
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
