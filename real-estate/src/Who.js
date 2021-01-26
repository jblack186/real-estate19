import React, {useState, useEffect} from 'react';
import './Who.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Agent from './images/agent.jpg';
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
      <p>We are a full service Real Estate Team serving the Atlanta Metro area. We Specialize in Cobb, Paulding, Atlanta and surrounding areas. Buying, Selling, and Staging are just a few of our services.</p>
<p>
Our team of experts represents the best and brightest in the industry, and we’re always striving to lead the field in research, innovation, and consumer education. Today’s buyers and sellers need a trusted resource that can guide them through the complex world of real estate. With our extensive knowledge and commitment to providing only the best and most timely information to our clients, we are your go-to source for real estate industry insight and advice.</p>
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