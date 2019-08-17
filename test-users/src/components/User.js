
import { Link } from '@reach/router'
import '../App.css';

import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className='user'>
        Name
        Email Address
      <Link to={`/123`}>Edit</Link>
        <button type='submit' onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
  handleClick = async (userID) => {
  //remove document from the database
  console.log('delete')
}
}



export default User;