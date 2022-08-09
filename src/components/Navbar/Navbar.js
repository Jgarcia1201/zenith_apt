import React from 'react';

import { Link } from 'react-router-dom';

import "./Navbar.css"

const Navbar = () => {

     return (
          <nav id='navMain'>
                    <Link id="zenLogo" to={"/"}>Z</Link>
                    <div id="navLinkBox">
                         <Link className='navLink' to='/quiz'>Quiz</Link>
                         <Link className='navLink' to='/contact'>Contact</Link>
                         <Link className='navLink' to='/about'>About Us</Link>
                    </div>
          </nav>
     )
};

export default Navbar;