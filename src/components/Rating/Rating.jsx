import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import FeedbackSlider from '../../utilities/FeedbackSlider';
import './Rating.css'

function Rating() {
  return (
    <section id="rating-section">
        <div className="container">
            <div className='rating-container'>
                <div className='rating-choose'>
                    <h1>Why <span>Choose</span> Us?</h1>
                <ul>
                    <li><FaStar /> Lower prices than any other</li>
                    <li><FaRegStar /> Discount for installments</li>
                    <li><FaStar /> New arrived motorcycles</li>
                    <li><FaRegStar /> Delivery to your residence</li>
                    <li><FaStar /> Delivery thru any ports</li>
                    <li><FaRegStar /> Extra liability insurance</li>
                    <li><FaStar /> Smooth transactions</li>
                </ul>
                </div>
                
                <div className='gofa-rating'>
                    <div><h2><span>Google</span> and <span>Facebook</span> Ratings</h2></div>
                    <hr />
                    <div>
                        <div>
                        <h2>2023</h2>
                        <h4>Year Founded</h4> 
                        </div>

                        <div><h2>5<span><FaStar /></span></h2>
                        <h4>Google Rating</h4>
                        </div>

                        <div><h2>5<span><FaStar /></span></h2>
                        <h4>Facebook Rating</h4>
                        </div>
                    </div>
                </div>
                </div>
            <h1>Feedbacks</h1>
            <FeedbackSlider />
           
        </div>
    </section>
  )
}

export default Rating