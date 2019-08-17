import React, { Component } from 'react';
import '../App.css';

class AddUser extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
         // onChange={this.handleChange}
          placeholder="Enter user name"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          // onChange={this.handleChange}
          placeholder="Enter user email"
        />
        <button type='submit'>Add User</button>
      </form>
    );
  }
}

export default AddUser;