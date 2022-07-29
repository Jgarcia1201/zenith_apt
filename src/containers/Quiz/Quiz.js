import React, { useEffect, useState } from "react";

import playTransition from '../../components/Transition/Tran';

import theH from '../../assets/theh.png';

import Questions from "./Questions";

import './Quiz.css';

const Quiz = () => {

     // Transition Into Page.
     useEffect(() => {
          // playTransition();  // AYE FIX THIS LATER!!!!!!!!!!!!!!!!!!
     }, [])

     const [status, setStatus] = useState(false);

     function startQuiz() {
          let qIntro = document.querySelector('#qIntro');
          qIntro.style.transition = '0.5s';
          qIntro.style.opacity = '0';
          setTimeout(() => {
               qIntro.remove();
          }, 500);
          setStatus(true);
     }

     return (
          <div id='quiz' className='container-fluid'>
               <img src={theH} id='htown'></img>
               <div id='qBox' className='container'>
                    <div id='qIntro' className='container'>
                         <h1 id='qIntroHead'>Apartment Placement Quiz</h1>
                         <p id='qIntroText'>Take Our 10 Question Personality Quiz & Let Us Do The Rest.</p>
                         <button onClick={startQuiz} className="btn btn-outline-light">Begin Quiz</button>
                    </div>
                    {status === true && <Questions />}
               </div>
          </div>
     )
};

export default Quiz;