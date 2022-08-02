import React, { useState, useCallback } from 'react';

import Q1 from './Qs/Question1/Question1';
import Q2 from './Qs/Question2/Question2';
import Q3 from './Qs/Question3/Question3';
import Q4 from './Qs/Question4/Question4';
import Q5 from './Qs/Question5/Question5';
import Q6 from './Qs/Question6/Question6';
import Q7 from './Qs/Question7/Question7';
import Q8 from './Qs/Question8/Question8';

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
     const [bedrooms, setBedrooms] = useState(1);
     const [pets, setPets] = useState();
     const [rentMin, setRentMin] = useState(900);
     const [rentMax, setRentMax] = useState(3500);
     const [livScore, setLivScore] = useState(0);
     const [luxScore, setLuxScore] = useState(0);
     const [email, setEmail] = useState('');
     const [hoods, setHoods] = useState([]);
     const [washerDry, setWasherDry] = useState("");

     // Change Handlers:
     const handleNameChange = useCallback((newName) => {
          setName(newName);
     }, []);

     const handleHoodChange = useCallback((newHoods) => {
          setHoods(newHoods);
     }, []);

     const handleLuxChange = useCallback((newScore) => {
          setLuxScore(newScore);
     }, [])

     const handleLivChange = useCallback((newScore) => {
          setLivScore(newScore);
     }, [])

     const handleInteriorChange = useCallback((newBr, newWashdry) => {
          setBedrooms(newBr);
          setWasherDry(newWashdry);
     }, [])

     const handleRentChange = useCallback((max, min) => {
          setRentMax(max);
          setRentMin(min);
     }, [])

     const handlePetChange = useCallback((newVal) => {
          setPets(newVal);
     }, []);

     const handleEmailChange = useCallback((newVal) => {
          setEmail(newVal);
     }, []);

     return (
          <div id='questionBox' className='container'>
               {question === 1 && <Q1 userName={name} nextQuestion={nextQuestion} handleNameChange={handleNameChange}/>}
               {question === 2 && <Q2 userName={name} previousQuestion={previousQuestion} nextQuestion={nextQuestion} updateHoods={handleHoodChange} hoods={hoods} />}
               {question === 3 && <Q3 luxScore={luxScore} previousQuestion={previousQuestion} nextQuestion={nextQuestion} updateLuxScore={handleLuxChange} />}
               {question === 4 && <Q4 livScore={livScore} previousQuestion={previousQuestion} nextQuestion={nextQuestion} updateLivScore={handleLivChange} />}
               {question === 5 && <Q5 bedrooms={bedrooms} washerDry={washerDry} updateInterior={handleInteriorChange} previousQuestion={previousQuestion} nextQuestion={nextQuestion} />}
               {question === 6 && <Q6 minRent={rentMin} maxRent={rentMax} handleRentChange={handleRentChange} previousQuestion={previousQuestion} nextQuestion={nextQuestion} />}
               {question === 7 && <Q7 pets={pets} handlePetChange={handlePetChange} previousQuestion={previousQuestion} nextQuestion={nextQuestion} />}
               {question === 8 && <Q8 email={email} handleEmailChange={handleEmailChange} previousQuestion={previousQuestion} nextQuestion={nextQuestion} />}
          </div>
     )
}

export default Questions;