import React from 'react';
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

const MidSection = () => {
  

  return (
    <section className='top-mid-container'>
        <div className='top-midSection-container'>
        <div className='mid-agents-container'>
          <div className='mid-agents'>
          <Carousel interval={2000} infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay>
            <div>
            <img className='mid-agent' src={Agent1} alt='realestate agent' />
            </div>
            <div>
              <img className='mid-agent' src={Agent2} alt='realestate agent' />
            </div>
          </Carousel>
          </div>
        </div>
        </div>
        <div className='bottom-midSection-container'>
        <div className='team-box'>

<img className='meet' src={Meet} alt='meet us' />
<div className='team-box-text'>
  <p>In today’s real estate market, selling and buying a home requires advanced knowledge of online as well as traditional marketing platforms. Just having a real estate license and listing a home on the MLS is not enough – you want an agent who has their ear to the ground when it comes to market trends, a deep understanding of the
  </p>

</div>
<Button size="lg" variant="outline-light">READ MORE</Button>
</div>

        </div>

      <div className='comment-icon'>
      <FontAwesomeIcon style={{color: '#bba462', fontSize: '3rem'}} icon={faQuoteRight} />
    </div>
        <div className='comments'>
          <div className='carousel-container'>
          <Carousels />
          </div>
        <Button size="lg" variant="outline-primary">READ MORE</Button>
      </div>

      <div className='featured-container'>
      <Container>
  <Row className='rows'>
    <Col className='columns' lg={6}>
      
      <img className='featured-logo' src={Featured} alt='featured log' />
     
      <p>We are a full service Real Estate Team serving the Atlanta Metro area. We Specialize in Cobb, Paulding, Atlanta and surrounding areas. Buying, Selling, and Staging are just a few of our services.</p>
<p>
Our team of experts represents the best and brightest in the industry, and we’re always striving to lead the field in research, innovation, and consumer education. Today’s buyers and sellers need a trusted resource that can guide them through the complex world of real estate. With our extensive knowledge and commitment to providing only the best and most timely information to our clients, we are your go-to source for real estate industry insight and advice.</p>
<Button size="lg" variant="outline-dark">VIEW MORE</Button>
    </Col>
    <Col className='columns' lg={6}>
      <img className='agent' src={House2} alt='realestate agent' />
    </Col>
  </Row>
</Container>
</div>

   </section>
  )
}

export default MidSection;