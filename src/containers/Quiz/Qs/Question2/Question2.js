import React, { useEffect, useState, useCallback} from 'react';

import './Question2.css'; 


// This Module lets a user select which neighborhoods they'd like to live in.
// I didn't use state for the array of neighborhoods, not exactly the "REACT" way to do things..
// but the values in the array are going to change a lot. Rerendering the whole component is unnecessary
// So I chose to break the rule here.

const Question2 = (props) => {

     // Extracting First Name.
     let firstNameBreak = props.userName.indexOf(' ');
     const firstName = props.userName.substr(0, firstNameBreak);

     let hoods = props.hoods;

     useEffect(() => {   // Fade In.
          setTimeout(() => {
               let q2 = document.querySelector('#q2');
               q2.style.opacity = '1';
          }, 500);
          styleDivs(hoods);
     }, []);

     // Setting Divs to Selected if User Previously Selected Them.
     const styleDivs = useCallback((arr) => {
          if (arr.includes("Downtown")) {
               let dt = document.querySelector('#downtownDiv');
               dt.className = "neighborhood selected";
          }
          if (arr.includes("Midtown")) {
               let midtown = document.querySelector('#midtown');
               midtown.className = "neighborhood selected";
          }
          if (arr.includes("Galleria")) {
               let galleria = document.querySelector('#galleria');
               galleria.className = "neighborhood selected";
          }
          if (arr.includes("River Oaks")) {
               let riverOaks = document.querySelector('#riverOaks');
               riverOaks.className = "neighborhood selected";
          }
          if (arr.includes("Heights")) {
               let heights = document.querySelector('#heights');
               heights.className = "neighborhood selected";
          }
          if (arr.includes("WestU")) {
               let westU = document.querySelector('#westU');
               westU.className = "neighborhood selected";
          }
     });

     // Change Handlers
     function handleDowntownChange() {
          let dt = document.querySelector('#downtownDiv');
          if (hoods.includes("Downtown")) {
               hoods = removeHood(hoods, "Downtown");
               dt.className = "neighborhood";
          }
          else {
               hoods.push("Downtown");
               dt.className = "neighborhood selected";
          }
     }

     const handleMidtownChange = () => {
          let midtown = document.querySelector('#midtown');
          if (hoods.includes("Midtown")) {
               hoods = removeHood(hoods, "Midtown");
               midtown.className = "neighborhood";
          }
          else {
               hoods.push("Midtown");
               midtown.className = "neighborhood selected";
          }
     }

     const handleGalleriaChange = () => {
          let galleria = document.querySelector('#galleria');
          if (hoods.includes("Galleria")) {
               hoods = removeHood(hoods, "Galleria");
               galleria.className = "neighborhood";
          }
          else {
               hoods.push("Galleria");
               galleria.className = "neighborhood selected";
          }
     }

     const handleRiverOaksChange = () => {
          let riverOaks = document.querySelector('#riverOaks');
          if (hoods.includes("River Oaks")) {
               hoods = removeHood(hoods, "River Oaks");
               riverOaks.className = "neighborhood";
          }
          else {
               hoods.push("River Oaks");
               riverOaks.className = "neighborhood selected";
          }
     }

     const handleHeightsChange = () => {
          let heights = document.querySelector('#heights');
          if (hoods.includes("Heights")) {
               hoods = removeHood(hoods, "Heights");
               heights.className = "neighborhood";
          }
          else {
               hoods.push("Heights");
               heights.className = "neighborhood selected";
          }
     }

     const handleWestUChange = () => {
          let westU = document.querySelector('#westU');
          if (hoods.includes("WestU")) {
               hoods = removeHood(hoods, "WestU");
               westU.className = "neighborhood";
          }
          else {
               hoods.push("WestU");
               westU.className = "neighborhood selected";
          }
     }

     const removeHood = useCallback((arr, item) =>{
          return arr.filter((hood) => hood !== item);
     }, []);

     // Event Handlers
     const handlePreviousClick = () => {
          props.previousQuestion();
          props.updateHoods(hoods);
     }

     const handleNextClick = () => {
          props.nextQuestion();
          props.updateHoods(hoods);
     }

     return (
          <div id='q2'>
               <h1 id='q2Name'>Hello {firstName}, Nice to Meet You.</h1>
               <h1 id='q2Head'>What Neighborhoods Should We Look In?</h1>
               <div id='q2Choices' className='container'>
                    <div id='downtownDiv' onClick={handleDowntownChange} class="custom-control custom-checkbox neighborhood">
                         <label class="custom-control-label" for="downtown">Downtown</label>
                    </div>

                    <div id='midtown' onClick={handleMidtownChange} class="custom-control custom-checkbox neighborhood">
                         <label class="custom-control-label" for="midtown">Midtown</label>
                    </div>

                    <div id='galleria' onClick={handleGalleriaChange} class="custom-control custom-checkbox neighborhood">
                         <label class="custom-control-label" for="galleria">Galleria</label>
                    </div>

                    <div id='riverOaks' onClick={handleRiverOaksChange} class="custom-control custom-checkbox neighborhood">
                         <label class="custom-control-label" for="riverOaks">River Oaks</label>
                    </div>

                    <div id='heights' onClick={handleHeightsChange} class="custom-control custom-checkbox neighborhood" >
                         <label class="custom-control-label" for="heights">Heights</label>
                    </div>

                    <div id='westU' onClick={handleWestUChange} class="custom-control custom-checkbox neighborhood">
                         <label class="custom-control-label" for="westU">West Universtiy</label>
                    </div>
               </div>

               <div id='q2ButtonBox'>
                    <button id='q2Back' onClick={handlePreviousClick} className="btn btn-outline-light">Previous</button>
                    <button id='q2Forward' onClick={handleNextClick} className="btn btn-outline-light">Next</button>
               </div>
          </div>
     );
}

export default Question2;