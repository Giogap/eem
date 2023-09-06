import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";

function App() {
  return (
    <Router>
      <div className="App-header">     
        <Navbar />
      </div>
      <div className='App-body'>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/bandForm" element={<BandForm />} />          
        </Routes>
      </div>
      <div className='App-footer'>
        <p>El Escarraman Music 2023</p>
      </div>
    </Router>
  );
}

export default App;