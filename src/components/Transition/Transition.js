import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import anime from 'animejs';

import './Transition.css';

const Transition = () => {

     useEffect(() => {
          let transition = document.querySelector('#transition');
          transition.style.transition = '0.25s';
          transition.style.opacity = '1';

          setTimeout(() => {
               anime({
                    targets: '#transition .cell',
                    scale: [
                      {value: 0, easing: 'easeOutSine', duration: 700},
                    //   {value: 1, easing: 'easeInOutQuad', duration: 1300}
                    ],
                    delay: anime.stagger(300, {grid: [5, 5], from: 'center'})
                  });
          }, 100)
          
          setTimeout(() => {
               transition.style.transition ='1s';
               transition.style.opacity = '0';
          }, 2500)

          setTimeout(() => {
               transition.remove();
          }, 4000)
     }, [])


     return (
          <div id='transition' className='container-fluid'>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'><h1 id='zenith' className='display-1'>ZENITH</h1></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
               <div className='cell'></div>
          </div>
     );
}

export default Transition;