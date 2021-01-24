import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faGithubSquare, faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import './Who.css';
import House from './house.jpg';
import logo from './logo.png';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Agent from './agent.jpg';
import Piece from './logopiece.png';

const Who = () => {
  

  return (
    <section className='who-container'>
      <Container>
  <Row className='rows'>
    <Col className='columns' lg={6}>
      <div className='who-piece'>
        <img src={Piece} alt='logo piece' />
        <h3>ADOBETILDE</h3>
      </div>
      <p>We are a full service Real Estate Team serving the Atlanta Metro area. We Specialize in Cobb, Paulding, Atlanta and surrounding areas. Buying, Selling, and Staging are just a few of our services.</p>
<p>
Our team of experts represents the best and brightest in the industry, and we’re always striving to lead the field in research, innovation, and consumer education. Today’s buyers and sellers need a trusted resource that can guide them through the complex world of real estate. With our extensive knowledge and commitment to providing only the best and most timely information to our clients, we are your go-to source for real estate industry insight and advice.</p>
<Button size="lg" variant="outline-dark">READ MORE</Button>
    </Col>
    <Col className='columns' lg={6}>
      <img className='agent' src={Agent} alt='realestate agent' />
    </Col>
  </Row>
</Container>
</section>
   
  )
}

export default Who;