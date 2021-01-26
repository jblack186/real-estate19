import React, {useState, useEffect} from 'react';
import './About.css';
import { useHistory } from "react-router-dom";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Agent from './images/agent.png';
import Piece from './images/logopiece.png';
import { motion } from "framer-motion"
import Construction from './images/construction.jpg';

const About = () => {
  return (
    <section className='about-container'>
      <div className='about-content'>
      <Container>
  <Row className='rows'>
    <Col className='columns' lg={6}>
      <div className='who-piece'>
        <motion.h2
         className="actions"
        initial={{x: -500}}
        animate={{x: 0 }}
        transition={{duration: 1}}
      
        >HOW WE GOT STARTED</motion.h2>
      </div>
      <motion.div
         initial={{y: 500}}
         animate={{y: 0}}
         transition={{duration: 1}}
       
      >
      <p>We happily serve those in the Savanah Georgia area. We enjoy seeing you buy the house you've always wanted. We are experts in all areas of the housing market. We happily serve those in the Savanah Georgia area. We enjoy seeing you buy the house you've always wanted. We are experts in all areas of the housing market.</p>
<p>
We are seeking to clients who are ambitious about there next purchase. If your looking for a smooth process than give us a call, we would love to work for you in getting that house you deserve. We are seeking to clients who are ambitious about there next purchase. If your looking for a smooth process than give us a call, we would love to work for you in getting that house you deserve.</p>
<Button size="lg" variant="outline-dark">READ MORE</Button>
</motion.div>
    </Col>
    <Col className='columns' lg={6}>
      <motion.img 
              initial={{x: 500}}
              animate={{x: 0 }}
              transition={{duration: 1}}
      
      className='construction' src={Construction} alt='realestate agent' />
    </Col>
  </Row>
</Container>

      </div>
</section>
   
  )
}

export default About;