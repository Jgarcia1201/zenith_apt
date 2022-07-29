import React, { useEffect, useRef, useCallback } from 'react';

import './Qs.css';


const Question1 = (props) => {

     const nameInputRef = useRef();
 
     useEffect(() => {
          setTimeout(() => {
               let q1 = document.querySelector('#q1');
               q1.style.opacity = '1';
          }, 500);
          nameInputRef.current.value = props.userName;
     }, [props.userName]);

     // Passing To Parent
     const handleQ1Submit = useCallback(() => {
          props.handleNameChange(nameInputRef.current.value);
          props.nextQuestion();
     }, [props]);

     return (
          <div id='q1'>
               <h1 id='q1Head'>What Is Your Full Name?</h1>
               <input id='q1Input' ref={nameInputRef} type='text'></input>
               <button onClick={handleQ1Submit} id='q1Button' className="btn btn-outline-light">Next Question</button>
          </div>
     );
}

export default Question1;