import React, { Component } from 'react';
import '../App.css';
import * as api from '../utils/api'

class AddUser extends Component {
  state = {
    name: '',
    email: '', addedUser: false
  }
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
         onChange={this.handleChange}
          placeholder="Enter user name"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
           onChange={this.handleChange}
          placeholder="Enter user email"
        />
        <button type='submit'>Add User</button>
      </form>
      {this.state.addedUser === true ? <p>New user added</p>: ""}
      </div>
    );
  }
  handleChange = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const name = this.state.name
    const email = this.state.email
    const userObj = {name, email}
    this.setState({addedUser:true, name: "", email:""})
    const addedUser = await api.postUser(userObj);
  };

}

export default AddUser;