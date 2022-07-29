import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import HomePage from './containers/HomePage/HomePage';
import Quiz from './containers/Quiz/Quiz';
import Contact from './containers/Contact/Contact';
import AboutUs from './containers/About/About';
import ErrorPage from './containers/ErrorPage';

import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <div id="navBarContainer">
          <Navbar />
        </div>

        <div id="contentContainer">
          <Routes>
            <Route path="/" exact element={<HomePage />} />

            <Route path='/quiz' exact element={<Quiz />} />

            <Route path='/contact' exact element={<Contact />} />

            <Route path='/err' exact element={<ErrorPage />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
