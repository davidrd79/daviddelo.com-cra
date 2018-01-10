import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ResumePage from './components/ResumePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Helmet>
            <title>daviddelo.com</title>
          </Helmet>
          <Navigation />

          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/resume" component={ResumePage} />

          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
