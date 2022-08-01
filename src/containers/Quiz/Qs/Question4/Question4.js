import React, {useState, useEffect} from 'react';

import './Question4.css';

const Question4 = (props) => {

     const [value, setValue] = useState(props.livScore);

     useEffect(() => {
          setTimeout(() => {
               let q4 = document.querySelector('#question4');
               q4.style.opacity = '1';
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
          props.updateLivScore(value);
     }

     const handlePreviousClick = () => {
          props.previousQuestion();
          props.updateLivScore(value);
     }

     return (
          <div id="question4">
               <h3 id='q4subTitle'>On a Scale from 1 to 10</h3>
               <h1 id='q4Title'>How Close Do You Like to be to Nightlife?</h1>
               <div id='optionBox'>
                    <div id='q4Minus' onClick={handleMinusClick} className="valButton btn btn-outline-light">Further</div>
                    <div id='q4Value'>{value}</div>
                    <div id='q4Plus' onClick={handlePlusClick} className="valButton btn btn-outline-light">Closer</div>
               </div>
               <div id='q4ButtonBox'>
                    <button className="btn btn-outline-light controlButton" onClick={handlePreviousClick}>Previous</button>
                    <button className="btn btn-outline-light controlButton" onClick={handleNextClick}>Next</button>
               </div>
          </div>
     );
}

export default Question4;