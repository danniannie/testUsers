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
      {this.state.isLoading === true ? <p>Loading...</p>: (<div>
 {users.map((user)=> {
 return <User key={user.id} user={user} refreshUsers={this.refreshUsers}/>
  })} 
        </div>)}
      </div>
    );
  }
  componentDidMount = async () => {
    const users = await api.fetchUsers();
    this.setState({ users, isLoading: false });
  }; 

  refreshUsers = async ()=> {
    const users = await api.fetchUsers();
    this.setState({ users });
  };
}

export default UserList;