import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Router, Switch, Route } from 'react-router-dom';
import Publications from './components/pages/Publications';
import ResearchProjects from './components/pages/ResearchProjects';
import Team from './components/pages/Team';
import SignUp from './components/pages/SignUp';
import { createBrowserHistory } from 'history';

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/publications' component={Publications} />
        <Route path='/research' component={ResearchProjects} />
        <Route path='/team' component={Team} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;