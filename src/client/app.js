import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Products from './components/products.jsx';
import People from './components/people.jsx';
import Community from './components/community.jsx';
import News from './components/news.jsx';

require('./styles/app.scss');
require('./styles/frame.scss');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="who-we-are" component={About} />
      <Route path="products" component={Products} />
      <Route path="people" component={People} />
      <Route path="global-community-initiatives" component={Community} />
      <Route path="whats-new" component={News} />
    </Route>
  </Router>
  , document.getElementById('app')
);