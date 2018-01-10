import PropTypes from 'prop-types';
import React from 'react';

const JobRole = ({ role }) => {
  const { company, details, endDate, jobTitle, location, startDate } = role;
  const detailsData = details.map((roleDetail, index) => {
    return (
      <p key={`role-detail-${index}`}>{roleDetail}</p>
    );
  });

  return (
    <article>
      <header>
        <h3>{jobTitle}, {company}; {location} — {startDate}-{endDate}</h3>
      </header>

      {detailsData}
    </article>
  );
}

JobRole.propTypes = {
  role: PropTypes.shape({
    company: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.node).isRequired,
    endDate: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired
  }).isRequired
};

export default JobRole;
