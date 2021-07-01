import { Route, Redirect } from "react-router-dom";
import React from "react";
import cookie from 'js-cookie'


const ProtectedRoute = ({ component: Component, ...rest }) => {
  let token = cookie.get('token')
  const queryString = window.location.search;
  //console.log(' protected route -> query string: '+ queryString);
  const urlParams = new URLSearchParams(queryString);
  if (token === '') {
    cookie.set('token', urlParams.get('token'));
  }
  
  token = cookie.get('token') 
  //console.log('protected route token authorized:', token)  
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