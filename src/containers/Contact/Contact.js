import anime from "animejs";
import React, { useMemo, useRef, useState, useCallback, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Service from "../../service/Service";

import './Contact.css';

const Contact = () => {

     const emailRef = useRef();
     const messageRef = useRef();
     const [messageIsValid, setMessageIsValid] = useState(true);
     const [validEmail, setValidEmail] = useState(true);
     const navigate = useNavigate();
     
     //Memo this, this won't change.
     const api = useMemo(() => {
          return new Service();
     }, []);

     useEffect(() => {
          playAnimation();
     }, []);

     const playAnimation = useCallback(() => {
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

     const sendEmail = () => {
          if (emailRef.current.value.length === 0 || messageRef.current.value.length === 0) {
               setValidEmail(true);
               setMessageIsValid(false);
          }
          else if(!emailIsValid(emailRef.current.value)) {
               setMessageIsValid(true);
               setValidEmail(false);
          }
          else {
               const email = {
                    sender: emailRef.current.value,
                    message: messageRef.current.value
               }
               api.sendEmailToSelf(email);
               navigate('thankyou');
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
          <div id='contactPage' >
               <div id='contactAnimation' className='container'></div>
               <div id='contactContent' className='container'>
                    <div id='contactTitle'>
                         <h1 id='contactZenith'>Contact Us</h1>
                    </div>
                    <div id='contactForm'>
                         <label id='emailLabel' for='emailInput'>Email</label>
                         <input type='email' name='emailInput' ref={emailRef} id='emailInput'></input>

                         <label id='messageLabel' for='messageInput'>Message</label>
                         <textarea name='messageInput' id='messageInput' ref={messageRef}></textarea>

                         <button onClick={sendEmail} id='contactSubmit' className="btn btn-outline-light">Send</button>
                         <div id='warningBox'>
                              {!messageIsValid && <h5 className='warning'>Message and Email Cannot Be Blank</h5>}
                              {!validEmail && <h5 className='warning'>Please Enter a Valid Email</h5>}
                         </div>
                    </div>
               </div>
          </div>
     )
};

export default Contact;