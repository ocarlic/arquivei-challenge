import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (localStorage.getItem('email') === 'admin@arquivei.com.br' ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
