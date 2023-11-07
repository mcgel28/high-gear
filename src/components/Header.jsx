import React from 'react';
import '../App.css';
import ChangeBackground from '../redux/ChangeBackground';
import { Link, Element } from 'react-scroll';


function Header() {
  return (
  
    <div id="header-section">
      <ChangeBackground />
      <div className='container'>
        <div className='nav-bar'>
            <div className="nav-col-1">
              <h1>Rent Moto</h1>
            </div>
            <div className='nav-col-2'>
              <ul>
                <li><Link to="header-section" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about-section" smooth={true} duration={600}>Brands</Link></li>
                <li><Link to="list-section" smooth={true} duration={700}>Units</Link></li>
                <li><Link to="rating-section" smooth={true} duration={800}>Feedbacks</Link></li>
                <li><Link to="contact-section" smooth={true} duration={900}>Contact</Link></li>
              </ul>
            </div>
            </div>
          <div>
        </div>
      </div>
      <div className='landing-page'>
        <div className='container'>
          <div className='landing-page-title'>
          <h1 contentEditable="false">Find your ride</h1>
          <p>Explore the motorcycle<br />sharing marketplace</p>
          
        </div>
        </div>
      </div>
      
      <div className='form-section'>
      <div className="form-container">
          <div className='fullname-input'>
            <form>
              <label className="label">Full Name: </label>
              <input type="text" id="fullname" name="fullname" placeholder="What's your full name?"></input>
            </form>
          </div>

          <div className='email-input'>
            <form>
              <label className="label">E-mail: </label>
              <input type="email" id="email" name="email" placeholder="What's your e-mail?"></input>
              </form>
           </div>

           <div className='contact-input'>
            <form>
              <label className="label">Contact: </label>
              <input type="tel" id="phone" name="phone" placeholder="What's your contact?"></input>
             </form>
          </div>
            
          <div className='pickdate'>
            <form>
              <label className="label">Pick-up Date: </label>
              <input  type="date" id="pickupdate" name="pickupdate"></input>
            </form>
          </div>

           <div>
            <form>
              <label className="label">Time: </label>
              <input type="time" id="pickuptime" name="pickuptime"></input>
            </form>
          </div>

          <div>
            <form>
              <label className="label">Return Date: </label>
              <input type="date" id="returnDate" name="returnDate"></input>
            </form>
          </div>

          <div>
            <form>
              <label className="label">Time: </label>
              <input type="time" id="returnTime" name="returnTime"></input>
            </form>
          </div>

          <div>
            <form>
              <label className="label">Model Unit: </label>
              <input type="text" id="modelunit" name="modelunit"></input>
            </form>
          </div>

          <div>
            <form>
              <label className="label">Total Distance Travel: </label>
              <input type="number" id="distancetravel" name="distancetravel"></input>
            </form>
          </div>
          <div className='get-qoute-button'>
          <button className='get-a-qoute'>Get a Qoute</button>
          </div>
        </div>
      </div>

    </div>
       
  );
}   

export default Header;