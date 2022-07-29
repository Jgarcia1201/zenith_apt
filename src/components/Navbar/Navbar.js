import React from 'react';

import { Link } from 'react-router-dom';

import "./Navbar.css"

const Navbar = () => {

     return (
          <nav id='navMain' className="navbar navbar-expand-lg navbar-dark">
               <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                         <a id='zenithNav' className="navbar-brand" href="#">Z</a>
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                   <Link className='navLink' to='/'>
                                        <li className="nav-item">
                                             <a className="nav-link active" aria-current="page">Home</a>
                                        </li>
                                   </Link>

                                   <Link className='navLink' to='/quiz'>
                                        <li className="nav-item">
                                             <a class="nav-link" href="#">Quiz</a>
                                        </li>
                                   </Link>

                                   <Link className='navLink' to='/contact'>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">Contact Us</a>
                                        </li>
                                   </Link>
                                   <Link className='navLink' to='/about'>
                                        <li className="nav-item">
                                             <a className="nav-link" href="#">About Us</a>
                                        </li>
                                   </Link>
                              </ul>
                              
                    </div>
               </div>
          </nav>
     )
};

export default Navbar;