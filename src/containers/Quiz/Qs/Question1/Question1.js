import React, { useEffect, useRef, useCallback, useState } from 'react';

import './Question1.css';


const Question1 = (props) => {

     const nameInputRef = useRef();
     const [isValid, setIsValid] = useState(true);
 
     useEffect(() => {
          setTimeout(() => {
               let q1 = document.querySelector('#q1');
               q1.style.opacity = '1';
          }, 500);
          nameInputRef.current.value = props.userName;
     }, [props.userName]);

     // Passing To Parent
     const handleQ1Submit = useCallback(() => {
          if (nameInputRef.current.value.length == 0) {
               setIsValid(false);
          }
          else {
               props.handleNameChange(nameInputRef.current.value);
               props.nextQuestion();
          }
     }, [props]);

     return (
          <div id='q1'>
               <h1 id='q1Head'>What Is Your Full Name?</h1>
               <input id='q1Input' ref={nameInputRef} type='text'></input>
               <button onClick={handleQ1Submit} id='q1Button' className="btn btn-outline-light">Next Question</button>
               <div id='warning1'>
                    {isValid === false && <h3>Please Enter Your Name</h3>}
               </div>
          </div>
     );
}

export default Question1;