import React from 'react';
import './MidSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import Wall from './wall.jpg';
import Building from './building.jpg';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Agent from './agent.jpg';
import Agent1 from './agent001.jpg';
import Agent2 from './agent002.jpg';
import Meet from './meet.png';
import Featured from './featured.png';
import House2 from './house2.jpg';


const MidSection = () => {
  

  return (
    <section className='top-mid-container'>
        <div className='top-midSection-container'>
        <div className='mid-agents-container'>
          <div className='mid-agents'>
            <img className='mid-agent' src={Agent1} alt='realestate agent' />
            <img className='mid-agent' src={Agent2} alt='realestate agent' />
          </div>
        </div>
        </div>
        <div className='bottom-midSection-container'>
        </div>

      <div className='team-box'>

      <img className='meet' src={Meet} alt='meet us' />
      <div className='team-box-text'>
        <p>In today’s real estate market, selling and buying a home requires advanced knowledge of online as well as traditional marketing platforms. Just having a real estate license and listing a home on the MLS is not enough – you want an agent who has their ear to the ground when it comes to market trends, a deep understanding of the
        </p>

      </div>
      <Button size="lg" variant="outline-light">READ MORE</Button>
      </div>
      <div className='comment-icon'>
      <FontAwesomeIcon style={{color: '#bba462', fontSize: '3rem'}} icon={faQuoteRight} />
    </div>
        <div className='comments'>
        <p>Brandon’s commitment, professionalism, knowledge, and loyalty has surpassed all of my expectations. He builds personal relationships with all of his clients and keeps their wants and needs an upmost priority. His honesty and persistence is what I appreciate the most, as you can put 100% of your trust in him as a realtor. I could not be happier with my experience with Brandon and will definitely keep him as my #1 in future endeavors!</p>
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