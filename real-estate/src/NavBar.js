import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import './Navbar.scss';
import { useWindowSize } from "@react-hook/window-size/throttled";
import { useWindowSize as useWindowSizeD } from "@react-hook/window-size";
import useScrollPosition from "@react-hook/window-scroll";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import House2 from './images/house2.jpg';
import { motion } from "framer-motion"


const Navbar = () => {
  const [width, height] = useWindowSize({ fps: 60 });
  const [widthD, heightD] = useWindowSizeD();
  const scrollY = useScrollPosition(60 /*frames per second*/);
  const [open, setOpen] = useState(false);

  console.log('open', open)
const openOrClose = () => {
  setOpen(!open)
  

}

const close = () => {
  setOpen(false)
}

  let history = useHistory();
  console.log(history.location.pathname)
  

  return (
    <section>
    <div className={scrollY <= 100 ? 'nav-container' : 'nav-container-slide'}>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <ul className='nav-items'>
      <Link style={{ listStyle: 'none', textDecoration: 'none'}} to='/'><li>
          HOME
        </li></Link>
        <Link use style={{ listStyle: 'none', textDecoration: 'none'}} to='/about'><li>
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
        <FontAwesomeIcon onClick={openOrClose} style={{color: 'white', fontSize: '1.5rem'}} icon={faEllipsisH} />
        <p onClick={openOrClose} style={{color:'white'}}>MENU</p>
      </div>
    </div>
    <div></div>
    { open === true ?
    <motion.div 
    initial={{x: 800}}
    animate={{x: 0}}
    transition={{duration: .5}}

    className='slide-nav'>
    <FontAwesomeIcon onClick={openOrClose} className='times' style={{color: 'white'}} icon={faTimes} />

        <ul>

        <Link style={{ listStyle: 'none', textDecoration: 'none'}} to='/'><li>
          HOME
        </li></Link>
        <Link scrollY={true} style={{ listStyle: 'none', textDecoration: 'none'}} to='/about'><li>
        ABOUT US
        </li></Link>
        <Link style={{ listStyle: 'none', textDecoration: 'none'}} to='/contact'><li>
          CONTACT
        </li></Link>
                </ul>
                <div className='slide-line'></div>
          <div className='picture-logo'>
            <img className='slide-nav-pic' src={logo} alt='slide-logo' />
            <div className='features'>
              <p>Looking to buy?</p>
              <p>Message us here!</p>
              <p>Ready to sell?</p>
              <p>Let's work together!</p>
            </div>
 
          </div>
          <motion.div 
              initial={{x: 800}}
              animate={{x: 0}}
              transition={{duration: .2}}
          
          onClick={close} className='slide-half-hide'>

          </motion.div>
      </motion.div> : null }

    </section>
  )
}

export default Navbar;