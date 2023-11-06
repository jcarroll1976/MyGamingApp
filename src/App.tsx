import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Navigate,Route,BrowserRouter as Router, Routes} from "react-router-dom";
import Search from './components/Search';
import Home from './components/Home';
import SingleGameDetails from './components/SingleGameDetails';
import GameRelease from './components/GameRelease';


function App() {
  const [searchTerm,setSearchTerm] = useState("");
  
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/search' element = {<Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />} />
          <Route path='/game/:slug' element = {<SingleGameDetails />} />
          <Route path='/releases' element = {<GameRelease />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
