import React, {useState, useEffect} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import {Button} from 'react-bootstrap';
import './Contact.css';



const Contact = () => {


  return (
    <section className='contact-container'>
      <div className='contact-content'>
      <MDBContainer>
  <MDBRow>
    <MDBCol md="12">
      <form>
        <p>CONTACT US!</p>
        <div>
          <input placeholder='Name' type="text" id="defaultFormCardNameEx" className="form-control" />
        </div>
        <br />
        <div className='phone-email'>
          <input placeholder='Phone' type="email" id="defaultFormCardEmailEx" className="form-control" />

            <input placeholder='Email' type="email" id="defaultFormCardEmailEx" className="form-control" />
        </div>
        <textarea placeholder='Type message here' id='defaultFormCardTextlEx' />

        <div className="text-center py-4 mt-3">
        <Button  variant="outline-primary">Send</Button>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>

      </div>
</section>
   
  )
}

export default Contact;