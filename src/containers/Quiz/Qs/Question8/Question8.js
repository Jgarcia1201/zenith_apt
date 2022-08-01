import { useEffect, useRef, useState } from "react";

import './Question8.css';

const Question8 = (props) => {

     const emailInputRef = useRef();
     const [ emailInvalid, setEmailInvalid ] = useState();

     useEffect(() => {
          setTimeout(() => {
               const q8 = document.querySelector('#q8');
               q8.style.opacity = '1';
          }, 500)
          emailInputRef.current.value = props.email;
     })

     const handlePreviousClick = () => {
          if(emailIsValid(emailInputRef.current.value)) {
               props.handleEmailChange(emailInputRef.current.value);
               props.previousQuestion();
          }
          else {
               setEmailInvalid(true);
          }
     }

     const handleNextClick = () => {
          if(emailIsValid(emailInputRef.current.value)) {
               props.handleEmailChange(emailInputRef.current.value);
               props.nextQuestion();
          }
          else {
               setEmailInvalid(true);
          }
     }

     const emailIsValid = (emailVal) => {
          const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (emailVal.match(validRegex)) {
               return true;
          }
          return false;
     }

     return (
     <div id='q8'>
          <h2 id='q8Head'>What Email Should We Send Your Personalized Matches To?</h2>
          <input id='q8Input' ref={emailInputRef} type='email' required></input>
          {emailInvalid && <h3>Please Enter a Valid Email Address</h3>}
          <div id='q5ButtonBox'>
               <button className="btn btn-outline-light controlButton" onClick={handlePreviousClick}>Previous</button>
               <button className="btn btn-outline-light controlButton" onClick={handleNextClick}>Next</button>
          </div>
     </div>
     )
}

export default Question8;