import PropTypes from 'prop-types';
import React from 'react';

import ResumeSection from './ResumeSection';

import './SummarySection.css';

const SummarySection = ({ data, title }) => {
  const summaryData = data.paragraphs.map((paragraph, index) => {
    return (
      <p key={index}>{paragraph}</p>
    );
  });

  return (
    <ResumeSection className="summary">
      <header>
        <h2>{title}</h2>
      </header>

      {summaryData}
    </ResumeSection>
  );
}

SummarySection.propTypes = {
  data: PropTypes.shape({
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  title: PropTypes.string.isRequired
};

export default SummarySection;
