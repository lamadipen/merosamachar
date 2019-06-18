import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Aboutme from './components/Aboutme';

function App() {
  const name = 'Dipen';

  const user = {
    firstName: 'Haper',
    lastName: 'test'
  }
  return (
    <div className="App">
       <h1>Hello  {name}</h1>
      <h2>This is {user.firstName }</h2>
      <div tabIndex="0">
          <img src={logo} alt="logo" className="App-logo"></img>
          <Welcome></Welcome>
          <Aboutme/>
      </div>

    </div>
  );
}

export default App;
