import PropTypes from 'prop-types';
import React from 'react';

import ResumeSection from './ResumeSection';

const ContactSection = ({ data: { url }, title }) => {
  return (
    <ResumeSection className="contact">
      <header>
        <h2>{title}</h2>
      </header>
      <p>
        <a href={url}>{url}</a>
      </p>
    </ResumeSection>
  );
}

ContactSection.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired
};

export default ContactSection;
