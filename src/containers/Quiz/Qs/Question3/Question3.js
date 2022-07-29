import React, {useState, useEffect} from 'react';

import './Question3.css';

const Question3 = (props) => {

     const [value, setValue] = useState(props.luxScore);

     useEffect(() => {
          setTimeout(() => {
               let q3 = document.querySelector('#question3');
               q3.style.opacity = '1';
          }, 500);
     }, [])

     // Event Handlers
     const handleMinusClick = () => {
          if (value !== 0) {
               setValue(value - 1);
          }
     }

     const handlePlusClick = () => {
          if (value !== 10) {
               setValue(value + 1);
          }
     }

     const handleNextClick = () => {
          props.nextQuestion();
          props.updateLuxScore(value);
     }

     const handlePreviousClick = () => {
          props.previousQuestion();
          props.updateLuxScore(value);
     }

     return (
          <div id="question3">
               <h3 id='q3subTitle'>On a Scale from 1 to 10</h3>
               <h1 id='q3Title'>How Important are Luxury Aesthetics to You?</h1>
               <div id='optionBox'>
                    <div id='q3Minus' onClick={handleMinusClick} className="valButton btn btn-outline-light">Less Important</div>
                    <div id='q3Value'>{value}</div>
                    <div id='q3Plus' onClick={handlePlusClick} className="valButton btn btn-outline-light">More Important</div>
               </div>
               <div id='q3ButtonBox'>
                    <button id='q3Back' className="btn btn-outline-light controlButton" onClick={handlePreviousClick}>Previous</button>
                    <button id='q3Forward' className="btn btn-outline-light controlButton" onClick={handleNextClick}>Next</button>
               </div>
          </div>
     );
}

export default Question3;