import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
<UserList/>
    </div>
  );
}

export default App;
