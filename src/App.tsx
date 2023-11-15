import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShifumiPage from './views/ShifumiPage';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ShifumiPage />
      </header>
    </div>
  );
}

export default App;
