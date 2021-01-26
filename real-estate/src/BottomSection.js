import React, {useState, useEffect} from 'react';
import './BottomSection.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Area1 from './images/area1.jpg';
import Area2 from './images/area2.jpg';
import Area3 from './images/area3.jpg';
import Area4 from './images/area4.jpg';
import Area5 from './images/area5.jpg';
import Area6 from './images/area6.jpg';
import Area7 from './images/area7.jpg';
import Area8 from './images/area8.jpg';
import Area9 from './images/area9.jpg';
import Area10 from './images/area10.jpg';
import Area11 from './images/area11.jpg';
import Mission from './images/mission.png';
import MissionBack from './images/mission-back2.png';
import { motion } from "framer-motion"

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const BottomSection = () => {
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
    <section className='bottom-container'>
      <Container fluid={true}>
        <Row className='rows' >
          <Col className='columns' lg>
            <div className='bottom-properties one'>
            <motion.div 
          initial={{y: 900}}
          animate={{y: lastYPos >= 2350 ? 0 : null}}
          transition={{duration: 1}}      
            
            className='area-holder'>
            <img className='mid-agent' src={Area1} alt='realestate agent' />
            <p>ATLANTA</p>
            </motion.div>
            <motion.div 
           initial={{y: 900}}
           animate={{y: lastYPos >= 3000 ? 0 : null}}
           transition={{duration: 1.5}}      
            
            className='area-holder'>
              
            <img className='mid-agent' src={Area2} alt='realestate agent' />
            <p>ATLANTA</p>
            </motion.div>
            </div>
          </Col>
          <Col className='columns' lg>
            <div className='bottom-properties two'>
              <motion.div 
           initial={{y: 900}}
           animate={{y: lastYPos >= 2350 ? 0 : null}}
           transition={{duration: 1.7}}      
              
              className='area-holder'>
            <img className='mid-agent' src={Area3} alt='realestate agent' />
            <p>ATLANTA</p>
            </motion.div>
            <motion.div 
           initial={{y: 900}}
           animate={{y: lastYPos >= 3000 ? 0 : null}}
           transition={{duration: 1.7}}      
            
            className='area-holder'>
            <img className='mid-agent' src={Area4} alt='realestate agent' />
            <p>ATLANTA</p>
            </motion.div>
            </div>
          </Col>
          <Col className='columns' lg>
            <div className='bottom-properties three'>
              <motion.div 
           initial={{y: 900}}
           animate={{y: lastYPos >= 2350 ? 0 : null}}
           transition={{duration: 1.9}}      
              
              className='area-holder'>
            <img className='mid-agent' src={Area5} alt='realestate agent' />
            <p>ATLANTA</p>
            </motion.div>
            <motion.div 
           initial={{y: 900}}
           animate={{y: lastYPos >= 3000 ? 0 : null}}
           transition={{duration: 1.9}}      
            
            className='area-holder'>
            <img className='mid-agent' src={Area6} alt='realestate agent' />
            <p>ATLANTA</p>
            </motion.div>
            </div>
          </Col>
        </Row>
        <Row>
    <Col lg>
    <motion.div 
               initial={{opacity: 0}}
               animate={{opacity: lastYPos >= 4200 ? 1 : 0}}
               transition={{duration: 1.5}}      
    
    className='bottom-area-holder side'>
            <img className='mid-agent' src={Area7} alt='realestate agent' />
            <p>ATLANTA</p>
    </motion.div>
      
    </Col>
    <Col lg>
    <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: lastYPos >= 4200 ? 1 : 0}}
            transition={{duration: 1.5}}      
    
    className='bottom-area-holder mid'>
            <img className='mid-agent' src={Area8} alt='realestate agent' />
            <p>ATLANTA</p>
    </motion.div>
     
    </Col>
    <Col lg>
      <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: lastYPos >= 4200 ? 1 : 0}}
              transition={{duration: 1.5}}      
      
      className='bottom-area-holder mid'>
            <img className='mid-agent' src={Area9} alt='realestate agent' />
            <p>ATLANTA</p>
    </motion.div>

    </Col>
    <Col lg>
      <motion.div 
             initial={{opacity: 0}}
             animate={{opacity: lastYPos >= 4200 ? 1 : 0}}
             transition={{duration: 1.5}}      
      
      className='bottom-area-holder mid'>
            <img className='mid-agent' src={Area10} alt='realestate agent' />
            <p>ATLANTA</p>
    </motion.div>

    </Col>
    <Col lg>
      <motion.div 
             initial={{opacity: 0}}
             animate={{opacity: lastYPos >= 4100 ? 1 : 0}}
             transition={{duration: 1.5}}      
      
      className='bottom-area-holder side'>
            <img className='mid-agent' src={Area11} alt='realestate agent' />
            <p>ATLANTA</p>
    </motion.div>

    </Col>

  </Row>
  <section className='mission-container'>
  <div className="mission-logo-container-one" >
     
     <img className='mission-logo' src={Mission} alt='mission logo' />
  
 </div>

  <p className='mission-text'>We are a full service Real Estate Team serving the Atlanta Metro area. We Specialize in Cobb, Paulding, Atlanta and surrounding areas. Buying, Selling, and Staging are just a few of our services.</p>

  <div className='mission-flex'>
  <img className='mission-background' src={MissionBack} alt='mission logo' />
  <div className='mission'>
    <div className="mission-logo-container-two" >
     
        <motion.img 
        initial={{x: -900}}
           animate={{x: lastYPos >= 4500 ? 0 : null}}
           transition={{duration: 1}}  
      
        className='mission-logo' src={Mission} alt='mission logo' />
     
    </div>
  </div>
  </div>
  </section>
    </Container>
    <div className='form-container'>
    <MDBContainer>
  <MDBRow>
    <MDBCol md="12">
      <form>
        <p>CONTACT US!</p>
        <div>
          <input placeholder='Name' type="text" id="defaultFormCardNameEx" className="form-control" />
        </div>
        <br />
        <div className='phone-email'>
          <input placeholder='Phone' type="email" id="defaultFormCardEmailEx" className="form-control" />

            <input placeholder='Email' type="email" id="defaultFormCardEmailEx" className="form-control" />
        </div>
        <textarea placeholder='Type message here' id='defaultFormCardTextlEx' />

        <div className="text-center py-4 mt-3">
        <Button  variant="outline-primary">Send</Button>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
   </section>
  )
}

export default BottomSection;