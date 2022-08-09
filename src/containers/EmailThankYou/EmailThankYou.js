import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EmailThankYou.css';

const EmailThankYou = () => {

     useEffect(() => {
          setTimeout(() => {
               let thx = document.querySelector('#thankYou');
               thx.style.opacity = '1';
          }, 500);
     }, [])

     return (
          <div id="thankYou">
               <h4 className="emailThxText">Your Message Has Been Received And We'll Contact You Shortly.</h4>
               <h2 id="thxZenith" className="emailThxText">Thank You For Choosing Zenith Locators</h2>
               <Link to={"/"}><button id="thxHome" className="btn btn-outline-light">HOME</button></Link>
          </div>
     )
}

export default EmailThankYou;