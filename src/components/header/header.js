import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='row header'>
      <h3 className='col-sm-4 header-title'>
        <Link className='header-title' to='/'>StarDB</Link>
      </h3>
      <ul className='nav-menu col-sm-4'>
        <li>
          <Link to='/people/'>People</Link>
        </li>
        <li>
          <Link to='/planets/'>Planets</Link>
        </li>
        <li>
          <Link to='/starships/'>Starships</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/secret/'>Secrets</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;