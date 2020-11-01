import React from 'react';
import './App.css';
import { Navbar } from "./components/navbar/Navbar";
import { Body } from "./components/body/Body";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="body">
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
