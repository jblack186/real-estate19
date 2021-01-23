import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import House from './house.jpg';
import logo from './logo.png';


const Home = () => {
  

  return (
    <div className='home-container'>
      <img src={House} alt='house' />
    </div>
  )
}

export default Home;