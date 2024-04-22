import React from 'react';
import ChangeBackground from '../../utilities/ChangeBackground/ChangeBackground';
import './Header.css'


function Header() {
  return (
  
    <section id="header-section">
      <div className="container">
      <ChangeBackground />
      
        <div className='landing-page-title'>
          <h1>Find your ride</h1>
          <p>Explore the untapped power </p>
        </div>
        </div>
    </section>
       
  );
}   

export default Header;