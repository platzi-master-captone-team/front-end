import { Route, Redirect } from "react-router-dom";
import React from "react";
import cookie from 'js-cookie'


const ProtectedRoute = ({ component: Component, ...rest }) => {
  let token = cookie.get('token')
  console.log('initial token: '+token)
  const urlParams = new URLSearchParams(window.location.search);
  const tokenParam = urlParams.get('token')
  
  tokenParam ? console.log('params: ', tokenParam) : console.log('No params')


  if (tokenParam) {
    console.log('Enter setToken: '+typeof(token))
    cookie.set('token', tokenParam);
  }
  
  token = cookie.get('token') 
  console.log('protected route token authorized:', token)  
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

export default ProtectedRoute;