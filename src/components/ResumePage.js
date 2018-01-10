import React from 'react';
import { Helmet } from 'react-helmet';

const ResumePage = () =>
  (
    <div>
      <Helmet>
        <title>daviddelo.com | Resume</title>
      </Helmet>

      <section>
        <header>
          <h1>David Delo</h1>
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
      <section>
        <header>
          <h2>Summary</h2>
        </header>
      </section>
      <section>
        <header>
          <h2>Experience</h2>
        </header>
      </section>
      <section>
        <header>
          <h2>Education</h2>
        </header>
      </section>
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
    </div>
  );

export default ResumePage;
