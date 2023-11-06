import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import yamaha from "../images/motorcycleLogo/yamaha.png";
import kawasaki from "../images/motorcycleLogo/kawasaki.jpg";
import suzuki from "../images/motorcycleLogo/suzuki.png";
import honda from "../images/motorcycleLogo/honda.png";
import ducati from "../images/motorcycleLogo/ducati.png";
import ktm from "../images/motorcycleLogo/ktm.png";
import aprilia from "../images/motorcycleLogo/aprilia.png";
import bmw from "../images/motorcycleLogo/bmw.png";
import triumph from "../images/motorcycleLogo/triumph.png";
import cfmoto from "../images/motorcycleLogo/cfmoto.jpg";

const ImageSlider = () => {
  return (
    <>
    <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={1800} showStatus={false}>
      <div>
        <img className="brandlogo" src={yamaha} alt="yamaha" />
      </div>
      <div>
        <img className="brandlogo" src={kawasaki} alt="kawasaki" />
      </div>
      <div>
        <img className="brandlogo" src={suzuki} alt="suzuki" />
      </div>
      <div>
        <img className="brandlogo" src={honda} alt="honda" />
        </div>
    </Carousel>

    <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={1900} showStatus={false}>
    
    <div>
    <img className="brandlogo" src={ducati} alt="ducati" />
    </div>
    <div>
    <img className="brandlogo" src={ktm} alt="ktm" />
    </div>
    <div>
    <img className="brandlogo" src={aprilia} alt="aprilia" />
    </div>
    </Carousel>

    <Carousel showArrows={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000} showStatus={false}>
    <div>
    <img className="brandlogo" src={bmw} alt="bmw" />
    </div>
    <div>
    <img className="brandlogo" src={triumph} alt="triumph" />
    </div>
    <div>
    <img className="brandlogo" src={cfmoto} alt="cfmoto" />
    </div>
    </Carousel>
    </>
    );
};

export default ImageSlider;