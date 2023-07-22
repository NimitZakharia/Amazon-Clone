import React from "react";
import Header from "./Components/Navbar";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
       
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<div><Header /><Checkout /></div>} />
          <Route path="/" element={<div><Header /><Home /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
