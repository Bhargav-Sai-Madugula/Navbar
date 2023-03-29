import React from 'react';
import Navbar from './components/Navbar';
import './components/Navbar.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Welcome to my website</h1>
        <p>This is some content on the website</p>
      </main>
    </div>
  );
}

export default App;
