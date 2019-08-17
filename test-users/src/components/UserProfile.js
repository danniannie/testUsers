import React, { Component } from 'react';
import '../App.css';

class UserProfile extends Component {
state = {
  name: 'Danni',
  email: 'danniannie@hotmail.com'
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Current Name: Danni
        <label htmlFor="name">Edit name: </label>
        <input
          type="text"
          id="name"
          onChange={this.handleChange}
          placeholder="Enter updated name"
        />
        Current Email: Danniannie@hotmail.com
 <label htmlFor="email">Edit Email: </label>
        <input
          type="text"
          id="email"
          onChange={this.handleChange}
          placeholder="Enter updated email"
        />
        <button type='submit'>Submit Changes</button>
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
    // const addedStudent = await api.postStudent(studentObj);
    console.log(userObj)
    // this.setState({ addedStudent });
  };
}

export default UserProfile;