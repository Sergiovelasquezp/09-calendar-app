import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  localStorage.setItem('lastPath', rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to={'/login'}></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
