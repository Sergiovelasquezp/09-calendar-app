import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import LoginPage from '../components/Auth/LoginPage';
import CalendarPage from '../components/Calendar/CalendarPage';
import { authRenewToken } from '../redux/action-creators/auth-actions';
import { useDispatch, useSelector } from 'react-redux';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  const { checking, uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authRenewToken());
  }, []);
  if (checking) return <h5>Espere...</h5>;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={!!uid}
            exact
            path={'/login'}
            component={LoginPage}
          />
          <PrivateRoute
            isAuthenticated={!!uid}
            exact
            path={'/'}
            component={CalendarPage}
          />
          {/* <PrivateRoute exact path={'/login'} component={LoginPage} /> */}
          <Redirect to={'/'} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
