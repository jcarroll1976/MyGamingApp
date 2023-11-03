import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Sidebar from './components/Sidebar';
import {Navigate,Route,BrowserRouter as Router, Routes} from "react-router-dom";
import Search from './components/Search';
import Home from './components/Home';


function App() {
  const [searchTerm,setSearchTerm] = useState("");
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/search' element = {<Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />} />
        </Routes>
      </Router>
      
      <Home />
      <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
    </div>
  );
}

export default App;
