// import logo from './logo.svg';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import WordDetailsPage from './components/WorddetailsPage';
import './App.css';

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/history" element={<HistoryPage/>} />
          <Route path="/word/:word" component={WordDetailsPage} />
  </Routes>
      </div>
      
    </div>
  );
}

export default App;
