import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import './Navbar.css';
import { useWindowSize } from "@react-hook/window-size/throttled";
import { useWindowSize as useWindowSizeD } from "@react-hook/window-size";
import useScrollPosition from "@react-hook/window-scroll";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Navbar = () => {
  const [width, height] = useWindowSize({ fps: 60 });
  const [widthD, heightD] = useWindowSizeD();
  const scrollY = useScrollPosition(60 /*frames per second*/);

  let history = useHistory();
  console.log(history.location.pathname)
  

  return (
    <div className={scrollY <= 100 ? 'nav-container' : 'nav-container-slide'}>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <ul className='nav-items'>
      <Link style={{ listStyle: 'none', textDecoration: 'none'}} to='/'><li>
          HOME
        </li></Link>
        <Link style={{ listStyle: 'none', textDecoration: 'none'}} to='/about'><li>
        ABOUT US
        </li></Link>
        <Link style={{ listStyle: 'none', textDecoration: 'none'}} to='/contact'><li>
          CONTACT
        </li></Link>
      </ul>
      <div className='logoTwo'>
        <img src={logo2} alt='logoTwo' />
      </div>
      <div className={scrollY <= 100 ? 'contact-icons' : 'contact-icons-slide'}>
        <FontAwesomeIcon icon={faPhone} />
        <FontAwesomeIcon icon={faEnvelope} />

      </div>
      <div id='menu-icon'>
        <FontAwesomeIcon style={{color: 'white', fontSize: '1.5rem'}} icon={faEllipsisH} />
        <p style={{color:'white'}}>MENU</p>
      </div>
    </div>
  )
}

export default Navbar;