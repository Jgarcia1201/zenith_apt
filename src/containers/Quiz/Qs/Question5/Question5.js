import React, { useEffect, useState, useCallback } from 'react';
import './Question5.css';

const Question5 = (props) => {

     const [bedrooms, setBedrooms] = useState(props.bedrooms);
     const [washerDry, setwasherDry] = useState(props.washerDry);

     useEffect(() => {
          setTimeout(() => {
               let q5 = document.querySelector('#question5');
               q5.style.opacity = '1';
               fadeSelection(props.washerDry);
          }, 500);
     }, []);

     useEffect(() => {
          if (washerDry === true) {

          }
          else {

          }
     }, [washerDry])

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

     const handleInUnit = useCallback(() => {
          setwasherDry("inUnit");
          fadeSelection("inUnit");
     }, [])

     const handleConnOnly = useCallback(() => {
          setwasherDry("conn");
          fadeSelection("conn");
     }, [])

     const handleNoPref = useCallback(() => {
          setwasherDry("noPref");
          fadeSelection("noPref");
     }, [])

     const fadeSelection = useCallback((str) => {
          const noPref = document.querySelector('#noPref');
          const conn = document.querySelector('#connOnly');
          const inUnit = document.querySelector('#inUnit');
          if (str === "noPref") {
               noPref.className = "btn btn-outline-light controlButton  largeButton selected";
               conn.className = "btn btn-outline-light controlButton largeButton";
               inUnit.className = "btn btn-outline-light controlButton largeButton";
          }
          else if (str === "conn") {
               noPref.className = "btn btn-outline-light controlButton largeButton";
               conn.className = "btn btn-outline-light controlButton  largeButton selected";
               inUnit.className = "btn btn-outline-light controlButton largeButton";
          }
          else {
               noPref.className = "btn btn-outline-light controlButton largeButton";
               conn.className = "btn btn-outline-light controlButton largeButton";
               inUnit.className = "btn btn-outline-light controlButton largeButton selected";
          }
     }, [])
     
     const handlePreviousClick = () => {
          props.updateInterior(bedrooms, washerDry);
          props.previousQuestion();
     }

     const handleNextClick = () => {
          props.updateInterior(bedrooms, washerDry);
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
                    <h3>Washer and Dryer?</h3>
                    <div id="washDryBox">
                         <button onClick={handleInUnit} id='inUnit' className="btn btn-outline-light largeButton controlButton">In-Unit</button>
                         <button className="btn btn-outline-light controlButton largeButton" id="connOnly" onClick={handleConnOnly}>Connection Only</button>
                         <button className="btn btn-outline-light controlButton largeButton" id="noPref" onClick={handleNoPref}>No Preference</button>
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