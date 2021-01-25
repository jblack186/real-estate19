import React from 'react';
import './Footer.css';
import logo from './images/logo.png';
import logo2 from './images/logo2.png';


const Footer = () => {
  

  return (
    <section className='footer-container'>
      <div className='footer-logos'>
        <img src={logo} alt='logo' />
        <img src={logo2} alt='logoTwo' />
      </div>
      <div className='footer-list'>
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className='copyright'>
        <p>© 2021 Adobetilde. All rights reserved. Sitemap | Real Estate Website Design by The Budget Guys</p>
      </div>
   </section>
  )
}

export default Footer;