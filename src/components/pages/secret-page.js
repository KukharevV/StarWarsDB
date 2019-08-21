import React from 'react';
import { Redirect } from 'react-router-dom';


const SecterPage = ({ isLoggedIn }) => {

  if (!isLoggedIn) {
    return <Redirect to='/login'/>;
  }

  return (
    <h3>Secret Data!!!</h3>
  );
};

export default SecterPage;