import React, { useEffect } from 'react';

import './About.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {

     useEffect(() => {
          const aboutDisplay = document.querySelector('#aboutDisplay');
          const simply = document.querySelector('#simply');
          const agents = document.querySelector('#agents');
          const rebate = document.querySelector('#rebate');

          setTimeout(() => {
               aboutDisplay.style.opacity = '1';
          }, 500)

          setTimeout(() => {
               simply.style.opacity = '1';
          }, 1500);

          setTimeout(() => {
               agents.style.opacity = '1';
          }, 3800);

          setTimeout(() => {
               rebate.style.opacity = '1';
          }, 6800);
             
     })
     return(
          <div id='aboutPage'>
               <div id="aboutDisplay">
                    <h2 id='hello'>Hello, We're Zenith Locators</h2>
                    <h5 id="simply" className='aboutText'>Simply take our apartment placement quiz to receive a curated list of apartments based on your needs and personality.</h5>
                    <h5 id="agents" className='aboutText'>From there, our agents are just a call or email away ready to schedule a tour at your convenience.</h5>
                    <h5 id="rebate" className='aboutText'>We offer a cash rebate to our clients once a lease is signed, <br/> So be sure to ask your agent about that process.</h5>
                    <Link id='aboutButton' to={'/quiz'}>Take Our Quiz</Link>
               </div>
          </div>
     )
}

export default AboutUs;