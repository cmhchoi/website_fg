import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Home from './containers/Home.jsx';
import About from './containers/About.jsx';
import Products from './containers/Products.jsx';
import People from './containers/People.jsx';
import Community from './containers/Community.jsx';
import News from './containers/News.jsx';
import History from './containers/History.jsx';
import Culture from './containers/Culture.jsx';
import Men from './containers/Men.jsx';
import Women from './containers/Women.jsx';
import Children from './containers/Children.jsx';
import Partners from './containers/Partners.jsx';
import Category from './containers/Category.jsx';
import Where from './containers/Where.jsx';
import Materials from './containers/Materials.jsx';
import Techniques from './containers/Techniques.jsx';
import Terms from './containers/Terms.jsx';
import Contact from './containers/Contact.jsx';
import Executives from './containers/Executives.jsx';

require('./styles/app.scss');
require('./styles/frame.scss');
require('./styles/list.scss');
require('./styles/bulletin.scss');
require('./styles/executives.scss');

render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} /> 
      <Route path="who-we-are" component={About} />
      <Route path="who-we-are/history" component={History} />
      <Route path="who-we-are/culture-core-values" component={Culture} />
      <Route path="who-we-are/executive-officers" component={Executives} />
      <Route path="who-we-are/our-partners" component={Partners} />
      <Route path="products" component={Products} />
      <Route path="products/category" component={Category} />
      <Route path="products/category/men" component={Men} />
      <Route path="products/category/women" component={Women} />
      <Route path="products/category/children" component={Children} />
      <Route path="products/materials" component={Materials} />
      <Route path="products/techniques" component={Techniques} />
      <Route path="people" component={People} />
      <Route path="people/factories" component={People} />
      <Route path="people/story" component={People} />
      <Route path="people/jobs" component={People} />
      <Route path="global-community-initiatives" component={Community} />
      <Route path="global-community-initiatives/sustainability" component={Community} />
      <Route path="global-community-initiatives/charitable-programmes" component={Community} />
      <Route path="global-community-initiatives/practices" component={Community} />
      <Route path="global-community-initiatives/responsibility" component={Community} />
      <Route path="global-community-initiatives/collaboration" component={Community} />
      <Route path="whats-new" component={News} />
      <Route path="terms-of-use" component={Terms} />
      <Route path="contact-us" component={Contact} />
    </Route>
  </Router>
  , document.getElementById('app')
);
