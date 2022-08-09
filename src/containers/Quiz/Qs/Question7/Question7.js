import { useEffect, useState } from 'react';
import './Question7.css';

const Question7 = (props) => {

     const [pets, setPets] = useState(props.pets);

     useEffect(() => {
          setTimeout(() => {
               let q7 = document.querySelector('#question7');
               q7.style.opacity = '1';
          }, 500);
          let yes = document.querySelector('#petYes');
          let no = document.querySelector('#petNo');
          if (pets == true) {
               yes.className = "controlButton selected";
               no.className = "controlButton"
          }
          if (pets == false) {
               yes.className = "controlButton";
               no.className = "controlButton selected";
          }
     }, []);

     const handlePetYes = () => {
          setPets(true);
          let yes = document.querySelector('#petYes');
          let no = document.querySelector('#petNo');
          yes.className = "controlButton selected";
          no.className = "controlButton"
     }

     const handlePetNo = () => {
          setPets(false);
          let yes = document.querySelector('#petYes');
          let no = document.querySelector('#petNo');
          yes.className = "controlButton";
          no.className = "controlButton selected"
     }

     const handlePreviousClick = () => {
          props.handlePetChange(pets);
          props.previousQuestion();
     }

     const handleNextClick = () => {
          props.handlePetChange(pets);
          props.nextQuestion();
     }

     return (
          <div id="question7">
          <h1 id='q7Title'>Do You Have Any Pets?</h1>
          <div id='q7Box'>
               <button onClick={handlePetYes} id='petYes' className="controlButton">Yes</button>
               <button className="controlButton" id="petNo" onClick={handlePetNo}>No</button>
          </div>
          <div className='buttonBox'>
               <button id='q7Prev' className="qButton controlButton" onClick={handlePreviousClick}>Previous</button>
               <button id='q7Next' className="qButton controlButton" onClick={handleNextClick}>Next</button>
          </div>
     </div>
     )
}

export default Question7;