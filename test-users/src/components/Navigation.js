import React from 'react';
import { Link } from '@reach/router'
import '../App.css';

const Navigation = () => {
  return (
    <nav>
      <Link id="links" to="/">All Users</Link>
      <Link id="links" to="/addUser">Add New User</Link>
      
    </nav>
  );
};

export default Navigation;