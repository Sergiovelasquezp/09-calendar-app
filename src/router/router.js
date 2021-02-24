import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginPage from '../components/Auth/LoginPage'
import CalendarPage from "../components/Calendar/CalendarPage";

const AppRouter = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path={"/"} component={CalendarPage} />
            <Route exact path={"/login"} component={LoginPage} />
            <Redirect to={"/"}/>
          </Switch>
        </div>
      </Router>
  );
};

export default AppRouter;
