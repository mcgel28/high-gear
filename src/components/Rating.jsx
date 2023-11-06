import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import FeedbackSlider from '../redux/FeedbackSlider';

function Rating() {
  return (
    <div id="rating-section">
        <div className='rating-container'>
            <div className='rating-choose'>
                <h1>Why <span>Choose</span> Us?</h1>
                <li><FaStar /> Lower prices than any other</li>
                <li><FaRegStar /> Discount for long term rentals</li>
                <li><FaStar /> Almost new motorcycles</li>
                <li><FaRegStar /> Delivery to/from your residence</li>
                <li><FaStar /> Delivery to seaport or airport</li>
                <li><FaRegStar /> Extra liability insurance</li>
                <li><FaStar /> Smooth transactions</li>
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
  )
}

export default Rating