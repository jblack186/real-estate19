import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faGithubSquare, faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import House from './house.jpg';
import logo from './logo.png';
import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {
  

  return (
    <div className='home-container'>
      <img src={House} alt='house' />
      <div className='home-text'>
        <h2>SAVANAH</h2>
        <p>HUMBLE ABODES</p>

      </div>
      <div className='side-bar'>
        <div className='line'></div>
        <div className='faIcons'>
          <a className='font-border'>
            <FontAwesomeIcon className='footer-icon' icon={faFacebookF}/>
          </a>
          <a className='font-border'>
            <FontAwesomeIcon className='footer-icon' icon={faLinkedin}/>
          </a>
          <a className='font-border'>
            <FontAwesomeIcon className='footer-icon' icon={faTwitter}/>
          </a>        
      </div>
      </div>
      <div className='top-bottom-bar'>
        <div className='top-bottom-bar-flex'>
        <div className='bottom-bar-text'>
          <p>Property Types <br /> CONDOS AND HOMES</p>
        </div>
        <div className='bottom-line'></div>
        <div className='bottom-bar-text'>
          <p>Reliability<br /> HASSLE FREE</p>
        </div>
        <div className='bottom-line'></div>
        <div className='bottom-bar-text'>
          <p>SERVICE<br /> Client Focused</p>
        </div>
        <div className='bottom-line'></div>
        <div className='bottom-bar-text'>
          <p>Our Team<br /> BEST IN TOWN </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home;