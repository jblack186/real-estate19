import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import './Navbar.css';
import { useWindowSize } from "@react-hook/window-size/throttled";
import { useWindowSize as useWindowSizeD } from "@react-hook/window-size";
import useScrollPosition from "@react-hook/window-scroll";


const Navbar = () => {
  const [width, height] = useWindowSize({ fps: 60 });
  const [widthD, heightD] = useWindowSizeD();
  const scrollY = useScrollPosition(60 /*frames per second*/);


  return (
    <div className={scrollY <= 100 ? 'nav-container' : 'nav-container-slide'}>
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
      <div className={scrollY <= 100 ? 'contact-icons' : 'contact-icons-slide'}>
        <FontAwesomeIcon icon={faPhone} />
        <FontAwesomeIcon icon={faEnvelope} />

      </div>
      <div className='menu-icon'>
        <FontAwesomeIcon style={{color: 'white', fontSize: '1.5rem'}} icon={faEllipsisH} />
        <p style={{color:'white'}}>MENU</p>
      </div>
    </div>
  )
}

export default Navbar;