import React, { useState, useEffect } from 'react';
import yamahabg from "../../images/backgrounds/yamahabg.jpg"
import kawasakibg from "../../images/backgrounds/kawasakibg.jpg"
import suzukibg from "../../images/backgrounds/suzukibg.jpg"
import hondabg from "../../images/backgrounds/hondabg.jpg"
import bmwbg from "../../images/backgrounds/bmwbg.jpg"
import apriliabg from "../../images/backgrounds/apriliabg.jpg"
import ducatibg from "../../images/backgrounds/ducatibg.jpeg"
import ktmbg from "../../images/backgrounds/ktmbg.jpg"
import './ChangeBackground.css'

const images = [yamahabg, kawasakibg, suzukibg, hondabg, bmwbg, apriliabg, ducatibg, ktmbg];
const slideInterval = 2400; // Change image every 5 seconds

function ChangeBackground() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

// eslint-disable-next-line
useEffect(() => {
    const interval = setInterval(nextImage, slideInterval);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [currentImage]);

  return (
    <div className="background-slider">
        <div className="overlay"></div>

      <img src={images[currentImage]} alt="Background" className='background-image' />
      
    </div>  
  );
}

export default ChangeBackground;