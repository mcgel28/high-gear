import React from 'react'
import hglogo from '../../images/highgear.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import './Contact.css'

function Contact() {
  return (
    <section id="contact-section">
      <div className="overlay">
      <div className="container">
        <div className='contact-container'>
          <div className='contact-col'>
            <img src={hglogo} alt="high gear" />
            <h1>High Gear</h1>
            <div className='contact-icons'><FaFacebook /><FaInstagram /><FaTwitter /></div>
          </div>
          <div className='contact-col'>
            <h3>CITIES</h3>
            <ul>
              <li>Manila</li>
              <li>Rizal</li>
              <li>Pasay</li>
              <li>Makati</li>
            </ul>
          </div>

          <div className='contact-col'>
            <h3>COMPANY</h3>
              <ul>
                <li>About Us</li>
                <li>Team & Story</li>
                <li>Terms of Service</li>
                <li>Become an Affiliate</li>
              </ul>
          </div>

          <div className='contact-col'>
            <h3>SALES</h3>
              <ul>
                <li>Insurance</li>
                <li>How It Works</li>
                <li>Buy a Bigbike</li>
                <li>Maintain Performance</li>
              </ul>
          </div>

          <div className='contact-col'>
            <h3>CONTACT</h3>
                <ul>
                  <li><FaPhoneAlt /> +63 901 234 5678</li>
                  <li><FaWhatsapp /> WhatsApp Chat</li>
                  <li><FaEnvelope /> support@highgear.com</li>
                  <li><FaTv /> High Gear Website</li>
                </ul>
          </div>
        </div>
     
        <div className='contact-footer'>© 2024 Company, Inc. All rights reserved.
                <br /> Designed & Built by: Adrian Miguel Arellano 
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact