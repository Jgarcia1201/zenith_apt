import React, { useEffect, useState } from "react";

import theH from '../../assets/theh.png';

import Questions from "./Questions";

import './Quiz.css';

const Quiz = () => {

     const [status, setStatus] = useState(false);

     function startQuiz() {
          let qIntro = document.querySelector('#qIntro');
          qIntro.style.transition = '0.5s';
          qIntro.style.opacity = '0';
          setTimeout(() => {
               qIntro.remove();
               setStatus(true);
          }, 500);
     }

     return (
          <div id='quiz'>
               <div id='qBox' className='container'>
                    <div id='qIntro' className='container'>
                         <h1 id='qIntroHead'>Apartment Placement Quiz</h1>
                         <p id='qIntroText'>Take Our 10 Question Personality Quiz & Let Us Do The Rest.</p>
                         <button id="beginButton" onClick={startQuiz}>Begin Quiz</button>
                    </div>
                    {status === true && <Questions />}
               </div>
               <img src={theH} id='htown'></img>
          </div>
     )
};

export default Quiz;