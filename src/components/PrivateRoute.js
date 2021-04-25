import React from 'react';
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      return document.cookie.indexOf('learnSmart') > -1
        ? children
        : <Redirect to={{
          pathname: '/',
        }}
        />
    }} />
  )
}

export default PrivateRoute;
