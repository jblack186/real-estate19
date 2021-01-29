import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebookF, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import House from './images/house.jpg';
import House2 from './images/home2.jpg';
import House3 from './images/home3.jpg';
import Who from './Who';
import MidSection from './MidSection';
import BottomSection from './BottomSection';
import Footer from './Footer';
import NavBar from './NavBar';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  

  return (
    <div>

    <div className='home-container'>
            <div className='side-bar'>
        <div className='line'></div>
        <div className='faIcons'>
          <p className='font-border'>
            <FontAwesomeIcon className='footer-icon' icon={faFacebookF}/>
          </p>
          <p className='font-border'>
            <FontAwesomeIcon className='footer-icon' icon={faLinkedin}/>
          </p>
          <p className='font-border'>
            <FontAwesomeIcon className='footer-icon' icon={faTwitter}/>
          </p>        
      </div>
      </div>
      <Carousel interval={3000} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false} autoPlay>
      
      <img className='house' src={House} alt='house' />
      <img className='house' src={House2} alt='house2' />
      <img className='house' src={House3} alt='house3' />

      </Carousel>
      <div className='home-text'>
        <h2>GEORGIA</h2>
        <p>HUMBLE ABODES</p>

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
          <Who />
          <MidSection />
          <BottomSection />
          </div>
  )
}

export default Home;