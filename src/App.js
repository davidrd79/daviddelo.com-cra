import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import NoMatchingRoute from './components/NoMatchingRoute';
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

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/resume" component={ResumePage} />
            <Route component={NoMatchingRoute} />
          </Switch>

          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
