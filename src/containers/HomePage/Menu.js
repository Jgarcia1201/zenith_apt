import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import './Menu.css';

const Menu = () => {

     const [title, setTitle] = useState('ZENITH');
     const [subTitle, setSubTitle] = useState('Houston Apartment Locating Services');
     const navigate = useNavigate();


     const handleMouseEnterFollow = useCallback(() => {
          setTitle('Socials');
          setSubTitle('IG: zenithaptloc');
     }, [])

     const handleMouseEnterQuiz = useCallback(() => {
          setTitle('Quiz');
          setSubTitle ("Take our quiz and we'll do the rest")
     }, [])

     const handleMouseEnterAbout = useCallback(() => {
          setTitle('About Us');
          setSubTitle('Find Out More About Our Services');
     }, [])

     const handleMouseEnterContact = useCallback(() => {
          setTitle('Contact Us');
          setSubTitle('Get in Touch');
     }, [])

     const handleMouseLeave = useCallback(() => {
          setTitle('ZENITH');
          setSubTitle("Houston Apartment Locating Services");
     }, [])

     // Navigation
     const handleQuizClick = useCallback(() => {
          navigate('/quiz');
     }, []);

     const handleAboutClick = useCallback(() => {
          navigate('/about');
     }, []);

     const handleContactClick = useCallback(() => {
          navigate('/contact');
     }, []);

     const handleSocialClick = useCallback(() => {
          navigate('');
     }, []);

     return (
          <div id='menu'>
               <div id='menuBox' className='row row-cols-2'>
                    <div id='logo' classname='col'>
                         <h1 id='title' className='display-1'>{title}</h1>
                         <p id='aptloc'>{subTitle}</p>
                    </div>
                    <div id='select' classname='col'>
                         <div id='menuGrid'>
                              <div className='menuItem' onClick={handleQuizClick} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnterQuiz}>
                                   <span className="material-icons">psychology</span>
                                   <p className='menuText'>Quiz</p>
                              </div>
                              <div className='menuItem' onClick={handleAboutClick} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnterAbout}>
                                   <span className="material-icons">groups</span>
                                   <p className='menuText'>About</p>
                              </div>
                              <div className='menuItem' onClick={handleContactClick} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnterContact}>
                                   <span class="material-icons">connect_without_contact</span>
                                   <p className='menuText'>Contact</p>
                              </div>
                              <div className='menuItem' onClick={handleSocialClick} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnterFollow}>
                                   <span class="material-icons">favorite</span>
                                   <p className='menuText'>Socials</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
};

export default Menu;