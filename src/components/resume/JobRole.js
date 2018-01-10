import PropTypes from 'prop-types';
import React from 'react';

import './JobRole.css';

const JobRole = ({ role }) => {
  const { company, details, endDate, jobTitle, location, startDate } = role;
  const detailsData = details.map((roleDetail, index) => {
    return (
      <p key={`role-detail-${index}`}>{roleDetail}</p>
    );
  });

  return (
    <article className="role">
      <header>
        <h3>{jobTitle} - {company}</h3>
        <h4>{location} — {startDate}-{endDate}</h4>
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
