import React, { useState } from 'react'
import { Link } from 'react-scroll';
import hglogo from "../../images/highgear.png"
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"


function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };
  
  return (
    <section id="navbar-section">
        <div className="container">
            <div className='nav-bar'>
                <div className="nav-col-1">
                    <img src={hglogo} alt="high gear logo" />
                    <span>High<hr/>Gear</span>
                </div>

                <div className='nav-col-2'>
                    <ul id="menu" className={clicked ? "#menu active" : "menu"}>
                        <li><Link to="header-section" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="inquire-section" smooth={true} duration={600}>Inquire</Link></li>
                        <li><Link to="brand-section" smooth={true} duration={600}>Brands</Link></li>
                        <li><Link to="list-section" smooth={true} duration={700}>Units</Link></li>
                        <li><Link to="rating-section" smooth={true} duration={800}>Feedbacks</Link></li>
                        <li><Link to="contact-section" smooth={true} duration={900}>Contact</Link></li>
                    </ul>
                    <div id='mobile' onClick={handleClick}>
                        <span id='bars' className={clicked ? 'active' : ''}>
                        {clicked ? <FaTimes /> : <FaBars />}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar