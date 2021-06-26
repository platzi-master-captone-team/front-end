import { Route, Redirect } from "react-router-dom";
import React from "react";
import cookie from 'js-cookie'


const ProtectedRoute = ({ component: Component, ...rest }) => {
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