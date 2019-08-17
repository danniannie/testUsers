import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import Header from './components/Header';
import Navigation from './components/Navigation';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Router>
<UserList path='/'/>
<AddUser path='/addUser'/>
<UserProfile path='/:userID'/>
      </Router>

    </div>
  );
}

export default App;
