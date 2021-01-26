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
      <p>We are a full service Real Estate Team serving the Atlanta Metro area. We Specialize in Cobb, Paulding, Atlanta and surrounding areas. Buying, Selling, and Staging are just a few of our services.</p>
<p>
Our team of experts represents the best and brightest in the industry, and we’re always striving to lead the field in research, innovation, and consumer education. Today’s buyers and sellers need a trusted resource that can guide them through the complex world of real estate. With our extensive knowledge and commitment to providing only the best and most timely information to our clients, we are your go-to source for real estate industry insight and advice.</p>
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