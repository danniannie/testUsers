import React from 'react';
import { Link } from '@reach/router'
import '../App.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">All users</Link>
      <Link to="/addUser">Add User</Link>
      
    </nav>
  );
};

export default Navigation;