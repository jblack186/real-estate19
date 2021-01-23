import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png';
import logo2 from './logo2.png';
import './Navbar.css';

const Navbar = () => {
  

  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <ul className='nav-items'>
        <li>
          HOME
        </li>
        <li>
          ABOUT US
        </li>
        <li>
          CONTACT
        </li>
      </ul>
      <div className='logoTwo'>
        <img src={logo2} alt='logoTwo' />
      </div>
      <div className='contact-icons'>
        <FontAwesomeIcon style={{color: 'white', fontSize: '1.5rem'}} icon={faPhone} />
        <FontAwesomeIcon style={{color: 'white', fontSize: '1.5rem'}} icon={faEnvelope} />

      </div>
      <div className='menu-icon'>
        <FontAwesomeIcon style={{color: 'white', fontSize: '1.5rem'}} icon={faEllipsisH} />
        <p style={{color:'white'}}>MENU</p>
      </div>
    </div>
  )
}

export default Navbar;