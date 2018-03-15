import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Board from './components/containers/Board';
import { App } from './components';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Board} />
    </Route>
  </Router>
);

export default routes;
