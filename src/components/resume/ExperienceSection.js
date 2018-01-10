import PropTypes from 'prop-types';
import React from 'react';

import JobRole from './JobRole';
import ResumeSection from './ResumeSection';

const ExperienceSection = ({ title, data }) => {
  const experienceData = data.roles.map((role, index) => {
    return (
      <JobRole key={`experience-role-${index}`} role={role} />
    );
  });

  return (
    <ResumeSection>
      <header>
        <h2>{title}</h2>
      </header>

      {experienceData}
    </ResumeSection>
  );
}

ExperienceSection.propTypes = {
  data: PropTypes.shape({
    roles: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
  title: PropTypes.string.isRequired
};

export default ExperienceSection;
