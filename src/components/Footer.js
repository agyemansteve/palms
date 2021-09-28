import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
// import { Divider } from './Divider';

function Footer() {
  return (
    <div className='footer-container'>
        
        {/* <Divider
         bg="rgb(10 10 10 / 0%)"
          > */}
        
        <div className="social-icons">
          <a
               className='social-icon-link facebook'
               href='https://www.facebook.com/palmsloungegh'
               target='_blank'
               rel="noopener noreferrer"
               aria-label='Facebook'
             >
               <i className='fab fa-facebook-f'       
               />
             </a>
             <a
               className='social-icon-link'
               href='https://www.instagram.com/palmsloungegh'
               target='__blank'
               rel="noopener noreferrer"
               aria-label='Instagram'
             >
               <i className='fab fa-instagram' />
             </a>
             {/* <a
               className='social-icon-link youtube'
               href='/'
               target='_blank'
               aria-label='Youtube'
             >
               <i className='fab fa-youtube' />
             </a>
             <a
               className='social-icon-link twitter'
               href='/'
               target='_blank'
               aria-label='Twitter'
             >
               <i className='fab fa-twitter' />
             </a> */}
             
          </div> 
           {/* </Divider> */}
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
    
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            THE PALMS
            <i className='fas fa-feather-alt ' />
            </Link>
          </div>
          <small className='website-rights'> © 2021</small>
          <div className='social-icons'>
          <a className="link" target={'_blank'} href="https://www.google.com/maps/dir//House+of+Alkebulan,+citydia,+Opposite,+E+Legon+-+Trasacco+Estate+Rd,+Accra,+Ghana/@5.6505721,-0.1315608,17.54z/data=!4m8!4m7!1m0!1m5!1m1!1s0xfdf839b074ae0d3:0xf9fa94f4afbe8ea0!2m2!1d-0.1315887!2d5.6494177">
        
        <i className="fas fa-map-marker-alt"></i> 5 ET Akonor St, Madina, Ghana
        
        </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
