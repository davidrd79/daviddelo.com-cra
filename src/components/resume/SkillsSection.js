import React from 'react';

const SkillsSection = ({ title, data }) => {
  return (
    <section>
      <header>
        <h2>Skills</h2>
      </header>

      <ul>
        <li>Agile Software Development</li>
        <li>HTML,HTML5</li>
        <li>CSS, including CSS3, Sass, Compass, Responsive CSS</li>
        <li>JavaScript and various frameworks - React, Redux, Backbone, Marionette, Ember , jQuery, Underscore/Lodash, YUI</li>
        <li>JavaScript Unit Tests - Mocha, Chai, Enzyme, testdouble</li>
        <li>Package management and build tools - npm, Broccoli</li>
        <li>Server side frameworks - Node.js, Ruby on Rails, Java/JSP, PHP, Play</li>
        <li>Continous integration tools - CircleCI</li>
        <li>Accessibility, Site Speed/Performance</li>
        <li>Source Control - Git, Github, Subversion</li>
      </ul>
    </section>
  );
}

export default SkillsSection;
