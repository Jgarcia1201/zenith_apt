import React, { useEffect, useState, useCallback } from 'react';
import './Question5.css';

const Question5 = (props) => {

     const [bedrooms, setBedrooms] = useState(props.bedrooms);
     const [inUnitWasherDry, setInUnitWasherDry] = useState(props.inUnitWasherDry);

     useEffect(() => {
          setTimeout(() => {
               let q5 = document.querySelector('#question5');
               q5.style.opacity = '1';
          }, 500);
     }, []);

     useEffect(() => {
          const yes = document.querySelector('#washdryYes');
          const no = document.querySelector('#washdryNo');
          if (inUnitWasherDry === true) {
               yes.className = "btn btn-outline-light controlButton q5selected";
               no.className = "btn btn-outline-light controlButton";
          }
          else {
               no.className = "btn btn-outline-light controlButton q5selected";
               yes.className = "btn btn-outline-light controlButton";
          }
     }, [inUnitWasherDry])

     const handleBrPlusClick = useCallback(() => {
          if (bedrooms !== 3) {
               setBedrooms(bedrooms + 1);
          }
     }, [bedrooms])

     const handleBrMinusClick = useCallback(() => {
          if (bedrooms !== 1) {
               setBedrooms(bedrooms - 1);
          }
     }, [bedrooms])

     const handleWashDryYes = useCallback(() => {
          setInUnitWasherDry(true);
     }, [])

     const handleWashDryNo = useCallback(() => {
          setInUnitWasherDry(false);
     }, [])
     
     const handlePreviousClick = () => {
          props.updateInterior(bedrooms, inUnitWasherDry);
          props.previousQuestion();
     }

     const handleNextClick = () => {
          props.updateInterior(bedrooms, inUnitWasherDry);
          props.nextQuestion();
     }

     return (
          <div id="question5">
               <h1 id='q5Title'>Tell us About The Interior</h1>
               <div id='q5optionsBox'>
                    <h3>How many Bedrooms?</h3>
                    <div id='brBox'>
                         <div id='q5Minus' onClick={handleBrMinusClick} className="q5valButton btn btn-outline-light">-</div>
                         <div id='q5Value'>{bedrooms}</div>
                         <div id='q5Plus' onClick={handleBrPlusClick} className="q5valButton btn btn-outline-light">+</div>
                    </div>
                    <h3>Would You Like an In-Unit Washer and Dryer?</h3>
                    <div id="washDryBox">
                         <button onClick={handleWashDryYes} id='washdryYes' className="btn btn-outline-light controlButton">Yes</button>
                         <button className="btn btn-outline-light controlButton" id="washdryNo" onClick={handleWashDryNo}>No</button>
                    </div>
               </div>
               <div id='q5ButtonBox'>
                    <button className="btn btn-outline-light controlButton" onClick={handlePreviousClick}>Previous</button>
                    <button className="btn btn-outline-light controlButton" onClick={handleNextClick}>Next</button>
               </div>
          </div>
     )
}

export default Question5;