import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
// import Products from './components/products.jsx';

require('./styles/app.scss');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
  , document.getElementById('app')
);