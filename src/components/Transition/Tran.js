import anime from "animejs";

import './Transition.css';

// Function to Play Transition. 
// Run on the first mounting of every page Transition.

function playTransition() {

     // Setting Up Div with Cells To Animate.
     let root = document.querySelector('#root');

     let transitionMain = document.createElement('div');

     transitionMain.id = 'transition';

     for (let i = 0; i <= 100; i++) {
          let div = document.createElement('div');
          div.className = 'cell';
          transitionMain.append(div);

          if (i % 3 == 0) {
               div.innerHTML = "ZENITH";
          }
     }

     transitionMain.style.transition = '0.25s';
     transitionMain.style.opacity = '1';

     root.appendChild(transitionMain);

     // Animation.
     setTimeout(() => {
          anime({
               targets: '#transition .cell',
               scale: [
                 {value: 0, easing: 'easeOutSine', duration: 800},
               //   {value: 1, easing: 'easeInOutQuad', duration: 1300}
               ],
               delay: anime.stagger(200, {grid: [10, 10], from: 'center'})
             });
     }, 500)
     
     setTimeout(() => {
          transitionMain.style.transition ='1.5s';
          transitionMain.style.opacity = '0';
     }, 2800)

     setTimeout(() => {
          transitionMain.remove();
     }, 3850)

}

export default playTransition;