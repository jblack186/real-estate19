import React from 'react';
import './Carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Carousels = () => {
  

  return (
        <Carousel interval={5000} infiniteLoop={true} showStatus={false} showArrows={false} showIndicators={false} showThumbs={false} autoPlay autoPlay>
        <p>Brandon’s commitment, professionalism, knowledge, and loyalty has surpassed all of my expectations. He builds personal relationships with all of his clients and keeps their wants and needs an upmost priority. His honesty and persistence is what I appreciate the most, as you can put 100% of your trust in him as a realtor. I could not be happier with my experience with Brandon and will definitely keep him as my #1 in future endeavors!</p>
        <p>Brandon’s commitment, professionalism, knowledge, and loyalty has surpassed all of my expectations. He builds personal relationships with all of his clients and keeps their wants and needs an upmost priority. His honesty and persistence is what I appreciate the most, as you can put 100% of your trust in him as a realtor. I could not be happier with my experience with Brandon and will definitely keep him as my #1 in future endeavors!</p>

        </Carousel>
  )
}

export default Carousels;