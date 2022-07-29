import React, { useEffect, useState } from 'react';

import video1 from '../../assets/videos/video.mp4';

import Menu from './Menu';

import './HomePage.css';


const HomePage = () => {

     return (
          <div id='containerMain'>
               <video id='video' src={video1} autoPlay muted loop></video>
               <Menu />
          </div>
     )
};

export default HomePage