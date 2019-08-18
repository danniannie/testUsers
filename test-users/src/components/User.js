
import { Link } from '@reach/router'
import '../App.css';
import * as api from '../utils/api'
import React, { Component } from 'react';

class User extends Component {
  state = {
    deleted: false
  }
  render() {
    const {email, name} = this.props
    return (
      <div className='user'>
      <p>  Name: {name}</p>
       <p> Email Address: {email} </p>
      <Link to={`/123`} className='delete'>Edit</Link>
        <p><span className='delete'onClick={this.handleClick}>Delete</span></p>
      </div>
    );
  }
  handleClick = async (event) => {
  const {email} = this.props
  const deleted = await api.removeUser(email)
  this.setState({deleted: true})
  this.props.refreshUsers()
}
}



export default User;