import { Route, Redirect } from "react-router-dom";
import React from "react";
import cookie from 'js-cookie'


const ProtectedRoute = ({ component: Component, ...rest }) => {

  const queryString = window.location.search;
  console.log(' protected route -> query string: '+ queryString);
  const urlParams = new URLSearchParams(queryString);
  if (urlParams) {
    cookie.set('token', urlParams.get('token'));
  }
  
  const token = cookie.get('token') 
  console.log('token authorized:', token)  
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to="/login"
          />
        )
      }
    />
  )
}

export default ProtectedRoute