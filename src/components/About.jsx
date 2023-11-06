import React from 'react';
import zx10r from "../images/zx10r.jpg";
import ImageSlider from '../redux/ImageSlider';

function About() {
  return (
    <div id="about-section">
      <div className='about-variety'>
        <div className='search'>
       
          <input className='search-bar' placeholder="Can't find the unit model? Search here!"></input>
        
        </div>
        <div className='brandpic'>
          <div className='variety'>
            <h2 className='choose-brand'>Different variety of brands:</h2>
            <ImageSlider />
          </div>
          <div className='zx10rme'>
            <img className='zx10r' src={zx10r} alt="zx10r" />
            <p>The model of unit in the photo is 'Kawasaki Zx10r 2022'</p>
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default About