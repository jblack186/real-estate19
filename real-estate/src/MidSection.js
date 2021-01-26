import React, {useState, useEffect} from 'react';
import './MidSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import {Container, Row, Col, Button} from 'react-bootstrap';
import Agent1 from './images/agent001.jpg';
import Agent2 from './images/agent002.jpg';
import Meet from './images/meet.png';
import Featured from './images/featured.png';
import House2 from './images/house2.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Carousels from './Carousels';
import { motion } from "framer-motion"


const MidSection = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };

  }, [lastYPos]);



  return (
    <section className='top-mid-container'>
        <div className='top-midSection-container'>
        <div className='mid-agents-container'>
          <motion.div 
         initial={{y: 500}}
         animate={{y: lastYPos >= 900 ? 0 : null}}
         transition={{duration: 1}}
          
          className='mid-agents'>
          <Carousel interval={3000} infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay>
            <div>
            <img className='mid-agent' src={Agent1} alt='realestate agent' />
            </div>
            <div>
              <img className='mid-agent' src={Agent2} alt='realestate agent' />
            </div>
          </Carousel>
          </motion.div>
        </div>
        </div>
        <div className='bottom-midSection-container'>
        <div className='team-box'>

<img className='meet' src={Meet} alt='meet us' />
<div className='team-box-text'>
  <motion.p
          initial={{opacity: 0}}
          animate={{opacity: lastYPos > 1500 ? 1: 0}}
          transition={{duration: 2}}
  
  >Every member on our team is an expert. We happily server our clients with expedience and proffesionalism. We happily serve those in the Savanah Georgia area. We enjoy seeing you buy the house you've always wanted. We are experts in all areas of the housing market.
  </motion.p>

</div>
<Button size="lg" variant="outline-light">READ MORE</Button>
</div>

        </div>

      <motion.div 
      className='comment-container'
           initial={{x: -900}}
           animate={{x: lastYPos >= 2000 ? 0 : null}}
           transition={{duration: 1}}  
      >
      <FontAwesomeIcon className='comment-icon' style={{color: '#bba462', fontSize: '3rem'}} icon={faQuoteRight} />
    </motion.div>
        <motion.div 
          className="actions"
          initial={{x: -900}}
          animate={{x: lastYPos >= 2000 ? 0 : null}}
          transition={{duration: 1}}
         
        className='comments'>
          <div className='carousel-container'>
          <Carousels />
          </div>
        <Button size="lg" variant="outline-primary">READ MORE</Button>
      </motion.div>

      <motion.div 
          initial={{y: 900}}
          animate={{y: lastYPos >= 2100 ? 0 : null}}
          transition={{duration: 1}}      
      
      className='featured-container'>
      <Container>
  <Row className='rows'>
    <Col className='columns' lg={6}>
      
      <img className='featured-logo' src={Featured} alt='featured log' />
     
      <p>
      We happily serve those in the Savanah Georgia area. We enjoy seeing you buy the house you've always wanted. We are experts in all areas of the housing market. We happily serve those in the Savanah Georgia area. We enjoy seeing you buy the house you've always wanted. We are experts in all areas of the housing market.</p>
<p>
We are seeking to clients who are ambitious about there next purchase. If your looking for a smooth process than give us a call, we would love to work for you in getting that house you deserve. We are seeking to clients who are ambitious about there next purchase. </p>
<Button size="lg" variant="outline-dark">VIEW MORE</Button>
    </Col>
    <Col className='columns' lg={6}>
      <img className='agent' src={House2} alt='realestate agent' />
    </Col>
  </Row>
</Container>
</motion.div>

   </section>
  )
}

export default MidSection;