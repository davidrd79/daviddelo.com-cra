import PropTypes from 'prop-types';
import React from 'react';

const SummarySection = ({ title, data }) => {
  return (
    <section>
      <header>
        <h2>{title}</h2>
      </header>

      <p>
        More than 16 years of experience in the design and development of products and
        applications using web technologies. Currently serving as Director of Engineering
        leading the largest revenue generating team for thredUP.
      </p>
      <p>
        Strong knowledge of the software development life cycle, including requirements analysis,
        detailed specifications, development, testing, and deployment with Agile and waterfall
        methodologies. Seasoned people manager, mentor and coach to both individual contributors
        and managers. Drives engineering excellence and craftsmanship throughout the front-end
        development process.
      </p>
    </section>
  );
}

export default SummarySection;
