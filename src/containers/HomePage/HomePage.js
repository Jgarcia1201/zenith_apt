import React, { useEffect, useState } from 'react';

import video1 from '../../assets/videos/video.mp4';

import Menu from './Menu';

import './HomePage.css';


const HomePage = () => {

     useEffect(() => {

          // React has this weird bug where inline html values aren't in the build file.
          // This is a workaround. Setting the attributes manually fixes it.
          const vid = document.querySelector('#video');
          vid.setAttribute('muted', true);
          vid.setAttribute('playsinline', true);
          vid.setAttribute('autoplay', true);
          vid.setAttribute('loop', true);
     }, [])

     return (
          <div id='containerMain'>
               <video id='video' src={video1} autoPlay muted loop></video>
               <Menu />
          </div>
     )
};

export default HomePage