import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './ResumeSection.css';

const ResumeSection = ({ className, children }) => {
  const sectionClasses = classnames('resume-section', className);
  return (
    <section className={sectionClasses}>
      {children}
    </section>
  );
}

ResumeSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default ResumeSection;
