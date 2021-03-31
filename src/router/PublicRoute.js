import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  localStorage.setItem('lastPath', rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to={'/'}></Redirect>
        )
      }
    ></Route>
  );
};

export default PublicRoute;
