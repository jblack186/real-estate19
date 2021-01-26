import React from 'react';
import './Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Carousels = () => {
  

  return (
        <Carousel interval={5000} infiniteLoop={true} showStatus={false} showArrows={false} showIndicators={false} showThumbs={false} autoPlay autoPlay>
        <p>I was amazed at the ease of the process. I always dreaded buying a house because of the complex steps involved from searching to closing. Their team made it easy for me to understand and held my hand during the process. If your looking for a real estate agent you can count on then look know further than Adobetilde.</p>
        <p>Their team helped my husband and I get our dream house. The team was very knowedgable and responding to all my needs in a time sensitive manner. I honestly have no regrets in working with this company. Thank you to everyone who helped my family and I during this process.</p>

        </Carousel>
  )
}

export default Carousels;