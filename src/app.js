import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import { Login } from './pages/Login/Login';
import PageNotFound from './pages/Page-404/Page-404';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoute path="/" component={Main} />
    <Route component={PageNotFound} />
  </Switch>
);

export default App;
