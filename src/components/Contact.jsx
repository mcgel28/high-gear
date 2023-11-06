import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTv } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact-section">
      <div className='contact-overlay'>
        <div className='contact-container'>

          <div className='contact-col'>
            <h1>Rent Moto</h1>
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
            <h3>RENTAL</h3>
              <ul>
                <li>Insurance</li>
                <li>How It Works</li>
                <li>Rent a Bigbike</li>
                <li>Upload your Bigbike</li>
              </ul>
          </div>

          <div className='contact-col'>
            <h3>CONTACT</h3>
                <ul>
                  <li><FaPhoneAlt /> +63 901 234 5678</li>
                  <li><FaWhatsapp /> WhatsApp Chat</li>
                  <li><FaEnvelope /> support@rentmoto.com</li>
                  <li><FaTv /> Rent Moto Website</li>
                </ul>
          </div>
        </div>
        <hr />
        <div className='contact-footer'>© 2023 Company, Inc. All rights reserved.
                <br /> Made by: Adrian Miguel Arellano Ü
        </div>
      </div>
    </div>
  )
}

export default Contact