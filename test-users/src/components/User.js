
import { Link } from '@reach/router'
import '../App.css';
import * as api from '../utils/api'
import React, { Component } from 'react';

class User extends Component {
  state = {
    deleted: false
  }
  render() {
    const {user} = this.props
    return (
      <div className='user'>
      <p>  Name: {user.data.name}</p>
       <p> Email Address: {user.data.email} </p>
      <Link to={`/${user.id}`} state={{id: user.id}}className='delete'>Edit</Link>
        <p><span className='delete'onClick={this.handleClick}>Delete</span></p>
      </div>
    );
  }
  handleClick = async (event) => {
  const {user} = this.props
  const deleted = await api.removeUser(user.id)
  this.setState({deleted: true})
  this.props.refreshUsers()
}
}



export default User;