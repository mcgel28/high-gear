import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import feedback from './feedback.js'; 
import FbCard from './FbCard';

function FeedbackSlider() {
  return (
    <Carousel showArrows={false} showThumbs={false} infiniteLoop autoPlay interval={2000} showStatus={false}>
      {feedback.map((item) => (
        <FbCard
          key={item.id}
          imgUrl={item.imgUrl}
          name={item.name}
          feedback={item.feedback}
        />
      ))}
    </Carousel>
  );
}

export default FeedbackSlider;