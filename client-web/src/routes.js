import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Contests from './containers/Contests';
import Contest from './containers/Contest';
export default (
  <Route path="/" component={App}>
     <IndexRoute component={Contests} />
     <Route path="/:id" component={Contest} />
  </Route>
)