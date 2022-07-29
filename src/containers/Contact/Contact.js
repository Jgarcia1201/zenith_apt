import anime from "animejs";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

import playTransition from '../../components/Transition/Tran';

import './Contact.css';

const Contact = () => {

     const [ messageContent, setMessageContent ] = useState('Hello');

     useEffect(() => {

          playTransition();

          let contactAnimation = document.querySelector('#contactAnimation');

          for (let i = 0; i < 50; i++) {
               let cell = document.createElement('div');
               cell.className = 'contactCell';
               contactAnimation.appendChild(cell);
          }

          anime({
               targets: '#contactAnimation .contactCell',
               translateX: anime.stagger(10, {grid: [10, 5], from: 'center', axis: 'x'}),
               translateY: anime.stagger(10, {grid: [10, 5], from: 'center', axis: 'y'}),
               rotateZ: anime.stagger([0, 200], {grid: [10, 5], from: 'center', axis: 'x'}),
               delay: anime.stagger(200, {grid: [10, 5], from: 'center'}),
               easing: 'easeInOutQuad',
               loop: true,
               direction: 'alternate',
               duration: 7000
             });

     }, []);

     const handleMessageChange = (event) => {
          setMessageContent(event.target.value);
     }

     return (
          <div id='contactPage' className='container-fluid'>
               <div id='contactAnimation' className='container'></div>
               <div id='contactContent' className='container'>
                    <div id='contactTitle'>
                         <h1 id='contactZenith'>Contact Us</h1>
                    </div>
                    <form id='contactForm'>
                         <label id='emailLabel' for='emailInput'>Email</label>
                         <input type='email' name='emailInput' id='emailInput'></input>

                         <label id='messageLabel' for='messageInput'>Message</label>
                         <textarea name='messageInput' id='messageInput' onChange={handleMessageChange}></textarea>

                         <button type='submit' id='contactSubmit' className="btn btn-outline-light">Send</button>
                    </form>
               </div>
          </div>
     )
};

export default Contact;