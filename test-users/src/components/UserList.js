import React, { Component } from 'react';
import User from './User'
import '../App.css';
import * as api from '../utils/api'

class UserList extends Component {
  state = {
    users : [],
    isLoading: true
  }
  render() {
    const {users} = this.state
    return (
      <div className='UserList'>
{users.map((user)=> {
 return <User key={user.email} email={user.email} name={user.name}/>
})}
      </div>
    );
  }
  componentDidMount = async () => {
    const users = await api.fetchUsers();
    this.setState({ users, isLoading: false });
  }; 
}

export default UserList;