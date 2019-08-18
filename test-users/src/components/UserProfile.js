import React, { Component } from 'react';
import '../App.css';
import * as api from '../utils/api'

class UserProfile extends Component {
state = {
  name: '',
  email: ''
}

  render() {
    // const { name, email } = this.props.location.state.user.data
    return (
      <div>
      <h2>Edit User Details</h2>
      <form onSubmit={this.handleSubmit}>
       <div className='label'>
        Current Name: {"name"}{' '}
       <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          onChange={this.handleChange}
          placeholder="Enter updated name"
        />
        </div> 
        <div className='label'>
        Current Email: {"email"}{' '}
 <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          onChange={this.handleChange}
          placeholder="Enter updated email"
        />
        </div>
        <div className='buttonContainer'>
        <button className='submitButton' type='submit'>Submit Changes</button>
          </div>
      </form>
      </div>
    );
  }

componentDidMount  = async () => {
  const {id} = this.props.location.state
  const user = await api.fetchUserbyID(id)
  this.setState({ name: user.data.name, email: user.data.email })
}
  handleChange = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {id} = this.props.location.state
    const userObj = this.state;
    const amendedUser = await api.patchUser(id, userObj);
    
   
  };
}

export default UserProfile;