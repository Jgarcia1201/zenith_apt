import React, { useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import HomePage from './containers/HomePage/HomePage';
import Quiz from './containers/Quiz/Quiz';
import Contact from './containers/Contact/Contact';
import AboutUs from './containers/About/About';
import EmailThankYou from './containers/EmailThankYou/EmailThankYou';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThankYou from './containers/ThankYou/ThankYou';
import playTransition from './components/Transition/Tran';

function App() {

  useEffect(() => {
    playTransition();
  }, [])

  
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

            <Route path='/about' exact element={<AboutUs />} />

            <Route path='/thankyou' exact element={<ThankYou />} />

            <Route path='/contact/thankyou' exact element={<EmailThankYou />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
