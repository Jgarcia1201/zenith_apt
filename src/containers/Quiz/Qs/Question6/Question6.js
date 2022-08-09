import { useCallback, useEffect, useState } from 'react';

import Dropdown from '../../../../components/Dropdown/Dropdown';
import './Question6.css';

const Question6 = (props) => {

     const [minRent, setMinRent] = useState(props.minRent);
     const [maxRent, setMaxRent] = useState(props.maxRent);
     const [minLarger, setMinLarger] = useState();

     useEffect(() => {
          setTimeout(() => {
               let q6 = document.querySelector('#question6');
               q6.style.opacity = '1';
          }, 500);
     }, []);

     const minValChange = (newVal) => {
          setMinRent(newVal);
     }

     const maxValChange = (newVal) => {
          setMaxRent(newVal);
     }

     const handlePreviousClick = () => {
          if (minRent > maxRent) {
               setMinLarger(true);
          }
          else {
               props.handleRentChange(maxRent, minRent)
               props.previousQuestion();
          }
     }

     const handleNextClick = () => {
          if (minRent > maxRent) {
               setMinLarger(true);
          }
          else {
               props.handleRentChange(maxRent, minRent)
               props.nextQuestion();
          }
     }

     return (
     <div id="question6">
          <h3 id='q6subTitle'>Tell Us About Your Budget</h3>
          <h1 id='q6Title'>What's Your Rent Range?</h1>
          <div id='q6optionBox'>
               <div id="rentContainer">
                    <div className='rentBox'>
                         <h3>Minimum Rent</h3>
                         <Dropdown val={minRent} valueChange={minValChange} />
                    </div>
                    <h2>To</h2>
                    <div id="maxBox" className='rentBox'>
                         <h3>Maximum Rent</h3>
                         <Dropdown val={maxRent} valueChange={maxValChange} />
                    </div>
               </div>
          </div>
          <div id='q6ButtonBox'>
               <button className="qButton controlButton" onClick={handlePreviousClick}>Previous</button>
               <button className="qButton controlButton" onClick={handleNextClick}>Next</button>
          </div>
          {minLarger && <h3 className="warning">Minimum Rent Must Be Less Than Maximum Rent</h3>}
     </div>
     )
}

export default Question6;