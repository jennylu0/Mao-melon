import React from 'react';
import './assets/scss/styles.scss';
import {test} from './assets/scripts/scripts.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";



import {
  About,
  Index,
  Conventions
} from "./views/Pages";

export default function App() {
  test();

  return (
    <Router>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/about">About</Link> */}
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/conventions">
            <Conventions/>
          </Route>
          <Route path="/">
            <Index/>
          </Route>
        </Switch>
    </Router>
  )
}