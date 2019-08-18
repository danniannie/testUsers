
import { Link } from '@reach/router'
import '../App.css';

import React, { Component } from 'react';

class User extends Component {
  render() {
    const {email, name} = this.props
    return (
      <div className='user'>
      <p>  Name: {name}</p>
       <p> Email Address: {email} </p>
      <Link to={`/123`}>Edit</Link>
        <p><span type='submit' onClick={this.handleClick}>Delete</span></p>
      </div>
    );
  }
  handleClick = async (userID) => {
  //remove document from the database
  console.log('delete')
}
}



export default User;