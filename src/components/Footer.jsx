import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Link to='/contacts'>
        <button className='a'>
          Contacts
        </button>
      </Link>
      <span>&bull;</span>
      <Link to='/contribute'>
        <button className='a'>
          Contribute
        </button>
      </Link>
      <span>
        &copy; All rights reserved 2023
      </span>
    </footer>
  );
}
