import React from 'react';
import zx10r from "../../images/zx10r.jpg";
import ImageSlider from '../../utilities/ImageSlider';
import './Brand.css';

function About() {
  return (
    <section id="brand-section">
      <div className="container">
        <h2>Different brands:</h2>
          <div className="brand-container">
            <div className='imgslider'>
                <ImageSlider />
            </div>
            <div className='zx10'>
              <img className='zx10r' src={zx10r} alt="zx10r" />
              <p>The model of unit in the photo is 'Kawasaki Zx10r 2022'</p>
            </div>
        </div>
      </div>
    </section>

    
  )
}

export default About