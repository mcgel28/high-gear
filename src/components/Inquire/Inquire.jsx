import React from 'react'
import './Inquire.css'
import user from "../../images/icon/user.png"
import email from "../../images/icon/email.png"
import phone from "../../images/icon/cellphone.png"
import brand from '../../images/icon/brand.png'
import motor from '../../images/icon/motorbike.png'


function Inquire() {
  return (
    <section id='inquire-section'>
      <div className="container">
        <div className="form-container">
          <h2>Inquire Now</h2>
          <div className='form-box'>
            <form>
              <label><img src={user} alt='user'/>Name:</label>
              <input type="text" id="fullname" name="fullname" placeholder="Type your full name"></input>
            </form>
        
            <form>
              <label><img src={email} alt='email'/>E-mail: </label>
              <input type="email" id="email" name="email" placeholder="Type your e-mail"></input>
              </form>
         
            <form>
              <label><img src={phone} alt='phone'/>Contact: </label>
              <input type="text" id="phone" name="phone" placeholder="Type your contact"></input>
             </form>
        
            <form>
              <label><img src={brand} alt='brand'/>Brand</label>
              <input  type="text" id="brand" name="brand" placeholder="Type the brand"></input>
            </form>

            <form>
              <label><img src={motor} alt='motor'/>Model </label>
              <input type="text" id="model" name="model" placeholder="Type the model"></input>
            </form>

            <button className='get-a-qoute'>Get a Qoute</button>
          
          </div>
        </div>
        </div>
      </section>
  )
}

export default Inquire