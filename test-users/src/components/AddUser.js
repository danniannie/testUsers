import React, { Component } from 'react';
import '../App.css';

class AddUser extends Component {
  state = {
    name: '',
    email: ''
  }
  render() {
    console.log(this.state)
    return (
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
    );
  }
  handleChange = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const userObj = this.state;
    // const addedUser = await api.postUser(userObj);
    // this.setState({ addedUser});
    console.log(userObj)
  };

}

export default AddUser;