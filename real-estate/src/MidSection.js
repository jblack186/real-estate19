import React from 'react';
import './MidSection.css';
import Wall from './wall.jpg';
import Building from './building.jpg';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Agent from './agent.jpg';
import Agent1 from './agent001.jpg';
import Agent2 from './agent002.jpg';
import Meet from './meet.png';

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
   </section>
  )
}

export default MidSection;