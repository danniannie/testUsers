import React from 'react';
import { Link } from '@reach/router'
import '../App.css';

const User = () => {
  return (
    <div className='user'>
      Name
      Email Address
      <Link to={`/123`}>Edit</Link>
      <button>Delete</button>
    </div>
  );
};

export default User;