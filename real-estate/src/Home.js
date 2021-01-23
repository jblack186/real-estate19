import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faGithubSquare, faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import House from './house.jpg';
import logo from './logo.png';


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
      <div></div>
    </div>
  )
}

export default Home;