import React, { Component } from 'react';
import User from './User'
import '../App.css';

class UserList extends Component {
  render() {
    return (
      <div className='UserList'>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
      </div>
    );
  }
}

export default UserList;