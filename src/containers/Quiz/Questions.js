import React, { useState, useCallback } from 'react';

import Q1 from './Qs/Question1';
import Q2 from './Qs/Question2';

import './Questions.css';

// Quiz <- Questions <- Qs

const Questions = () => {

     // Question Changes:
     const [question, setQuestion] = useState(1); // Controls Question Showing.

     function previousQuestion() {
          setQuestion(question - 1);
     }

     function nextQuestion() {
          setQuestion(question + 1);
     }

     // User Answers:
     const [name, setName] = useState('');
     const [bedrooms, setBedrooms] = useState(0);
     const [pets, setPets] = useState(false);
     const [rentMin, setRentMin] = useState(0);
     const [rentMax, setRentMax] = useState(0);
     const [livScore, setLivScore] = useState(0);
     const [luxScore, setLuxScore] = useState(0);
     const [email, setEmail] = useState('');
     const [hoods, setHoods] = useState([]);

     // Change Handlers:
     const handleNameChange = useCallback((newName) => {
          setName(newName);
     }, []);

     const handleHoodChange = useCallback((newHoods) => {
          setHoods(newHoods);
     }, []);

     return (
          <div id='questionBox' className='container'>
               {question === 1 && <Q1 userName={name} nextQuestion={nextQuestion} handleNameChange={handleNameChange}/>}
               {question === 2 && <Q2 userName={name} previousQuestion={previousQuestion} nextQuestion={nextQuestion} updateHoods={handleHoodChange} hoods={hoods} />}
          </div>
     )
}

export default Questions;