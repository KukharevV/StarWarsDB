import React from 'react';
import './error-indicator.css';
import icon from './death-star-explosion.jpg';

const ErrorIndicator = () => {
  return (
    <div className='error warning text-warning'>
      <img className='error-img rounded' src={icon} alt='error icon'/>
      <h3 className='error-title'>Boom!</h3>
      <p className='error-text'>something has gone terribly wrong!</p>
      <p className='error-text'>(but we already send droids to fix it)</p>
    </div>
  );
};

export default ErrorIndicator;

