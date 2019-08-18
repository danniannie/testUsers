import React, { Component } from 'react';
import '../App.css';
import * as api from '../utils/api'

class UserProfile extends Component {
state = {
  originalName: '',
  originalEmail: '',
  name: "",
  email: "",
  updated: false
  
}

  render() {
    
  
    return (
      <div>
      <h2>Edit User Details</h2>
      <form onSubmit={this.handleSubmit}>
       <div className='label'>
            Current Name: {this.state.originalName}{' '}
       <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          onChange={this.handleChange}
          placeholder="Enter updated name"
        />
        </div> 
        <div className='label'>
            Current Email: {this.state.originalEmail}{' '}
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
        {this.state.updated === true ? <p>User amended</p> : ""}
      </div>
    );
  }

componentDidMount  = async () => {
  const {id} = this.props.location.state
  const user = await api.fetchUserbyID(id)
  this.setState({ originalName: user.data.name, originalEmail: user.data.email })
}
  handleChange = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {id} = this.props.location.state
    const {name, email} = this.state
    const userObj = {}
    if(name.length > 0){
      userObj.name = name
    }
    if (email.length > 0) {
      userObj.email = email
    }
    const amendedUser = await api.patchUser(id, userObj);
    this.setState({updated: true})
   
  };
}

export default UserProfile;