import './App.css';
import React from 'react';
import Signup from './Component/Signup';
import Login from './Component/Login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          MY name
          <Signup />
          <Login />
        </h1>
      </header>
    </div>
  );
}

export default App;
