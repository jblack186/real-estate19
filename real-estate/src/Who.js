import React, {useState, useEffect} from 'react';
import './Who.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Agent from './images/agent.png';
import Piece from './images/logopiece.png';
import { motion } from "framer-motion"



const Who = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

console.log('last', lastYPos)
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
    <section className='who-container'>
      <Container>
  <Row className='rows'>
    <Col className='columns' lg={6}>
      <div className='who-piece'>
        <img src={Piece} alt='logo piece' />
        <motion.h3
         className="actions"
        initial={{x: -500}}
        animate={{x: lastYPos >= 180 ? 0 : null}}
        transition={{duration: 1}}
      
        >ADOBETILDE</motion.h3>
      </div>
      <motion.div
         initial={{y: 500}}
         animate={{y: lastYPos >= 180 ? 0 : null}}
         transition={{duration: 1}}
       
      >
      <p>We happily serve those in the Georgia area. We enjoy seeing you buy the house you've always wanted. We are experts in all areas of the housing market. We happily serve those in the Savanah Georgia area. We enjoy seeing you buy the house you've always wanted. We are experts in all areas of the housing market.</p>
<p>
We are seeking to clients who are ambitious about there next purchase. If your looking for a smooth process than give us a call, we would love to work for you in getting that house you deserve. We are seeking to clients who are ambitious about there next purchase. If your looking for a smooth process than give us a call, we would love to work for you in getting that house you deserve.</p>
<Button size="lg" variant="outline-dark">READ MORE</Button>
</motion.div>
    </Col>
    <Col className='columns' lg={6}>
      <motion.img 
              initial={{x: 500}}
              animate={{x: lastYPos >= 180 ? 0 : null}}
              transition={{duration: 1}}
      
      className='agent' src={Agent} alt='realestate agent' />
    </Col>
  </Row>
</Container>
</section>
   
  )
}

export default Who;