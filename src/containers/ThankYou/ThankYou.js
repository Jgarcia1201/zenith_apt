import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {

     useEffect(() => {
          setTimeout(() => {
               let thx = document.querySelector('#thankYou');
               thx.style.opacity = '1';
          }, 500);
     }, [])

     return (
          <div id="thankYou">
               <h2>Thank You For Choosing Zenith Locators</h2>
               <h3>Your Personalized Matches Should Arrive Shortly</h3>
               <Link to={"/"}><button id="thxHome" className="btn btn-outline-light">HOME</button></Link>
          </div>
     )
}

export default ThankYou;