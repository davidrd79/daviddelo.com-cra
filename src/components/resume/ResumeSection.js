import PropTypes from 'prop-types';
import React from 'react';

const ResumeSection = ({ children }) => {
  return (
    <section className="resume-section">
      {children}
    </section>
  );
}

ResumeSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default ResumeSection;
