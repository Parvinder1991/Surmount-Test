import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import NFLSchedule from './components/schedule/NFLSchedule';
import MLBSchedule from './components/schedule/MLBSchedule';

export default (
  <Route path="/" component={App}>
    <IndexRoute path="/nfl/schedule" component={NFLSchedule} />
    <Route path="/nfl/schedule" component={NFLSchedule} />
    <Route path="/mlb/schedule" component={MLBSchedule} />
    <Route path="*" component={NotFound} />
  </Route>
);
