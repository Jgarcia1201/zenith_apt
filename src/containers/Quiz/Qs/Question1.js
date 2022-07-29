import React, { useEffect, useState, useCallback } from 'react';

import './Qs.css';


const Question1 = (props) => {

     const [name, setName] = useState(props.userName);
 
     useEffect(() => {
          setTimeout(() => {
               let q1 = document.querySelector('#q1');
               q1.style.opacity = '1';
          }, 500);
     }, []);

     const handleNameChange = (event) => {
          setName(event.target.value);
     }

     // Passing To Parent
     const handleQ1Submit = useCallback(() => {
          props.handleNameChange(name);
          props.nextQuestion();
     });

     return (
          <div id='q1'>
               <h1 id='q1Head'>What Is Your Full Name?</h1>
               <input id='q1Input' onChange={handleNameChange} type='text' value={name}></input>
               <button onClick={handleQ1Submit} id='q1Button' className="btn btn-outline-light">Next Question</button>
          </div>
     );
}

export default Question1;