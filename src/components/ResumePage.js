import React from 'react';
import { Helmet } from 'react-helmet';

import ContactSection from './resume/ContactSection';
import EducationSection from './resume/EducationSection';
import ExperienceSection from './resume/ExperienceSection';
import resumeData from '../data/resume.json';
import SkillsSection from './resume/SkillsSection';
import SummarySection from './resume/SummarySection';

import './ResumePage.css';

const getSectionComponent = (section) => {
  let component;
  switch (section) {
    case 'contact':
      component = ContactSection;
      break;

    case 'summary':
      component = SummarySection;
      break;

    case 'experience':
      component = ExperienceSection;
      break;

    case 'education':
      component = EducationSection;
      break;

    case 'skills':
      component = SkillsSection;
      break;

    default:
      component = null;
      break;
  }

  return component;
};

const ResumePage = () => {
  const resumeSections = resumeData.sections.map((section, index) => {
    const { data, header: { title }, type } = section;

    const SectionComponent = getSectionComponent(type);
    if (SectionComponent) {
      return (
        <SectionComponent key={type} data={data} title={title} />
      );
    }
    return null;
  });

  return (
    [
      <Helmet key="resume-head">
        <title>daviddelo.com | Resume</title>
      </Helmet>,
      resumeSections
    ]
  );
};

export default ResumePage;
