import React from 'react';


function FbCard(details) {
  return (
    <div id="fbcard-section">
        
        <div className='fbcard-container'>
            <img className='feedback-image' src={details.imgUrl} alt="renter" />
            <h2 className='feedbackname'>{details.name}</h2>
            <p className='feedback'>{details.feedback}</p>
        </div>
    </div>
  );
}

export default FbCard;