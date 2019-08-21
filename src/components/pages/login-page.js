import React from 'react';
import { Redirect } from 'react-router-dom';


const LoginPage = ({ isLoggedIn, onLoggedIn }) => {

  if (isLoggedIn) {
    return <Redirect to='/'/>;
  }

  return (
    <div>
      <h4>Click to Login</h4>
      <button className='btn btn-primary btn-lg' onClick={onLoggedIn}>Login</button>
    </div>
  );
};

export default LoginPage;