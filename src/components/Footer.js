import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Footer.css';
import Grid from '@material-ui/core/Grid';

function Footer() {
  return (
    <div className='footer-container'>
      <Grid
        containter
        direction='row'
        alignItems='flex-start'
        justify='center'
        width='100%'
      >
        <div className='footerInfo'>
          <p>Health Results</p>
        </div>
      </Grid>
      <Grid
        containter
        direction='row'
        alignItems='flex-start'
        justify='center'
        width='100%'
      >
        <div className='footerInfo'>
          <p>
            Please browse our website to learn more about acupuncture and the
            services we offer.
          </p>
        </div>
      </Grid>
      <Grid
        containter
        direction='row'
        alignItems='flex-start'
        justify='space-evenly'
        width='100%'
      >
        <Grid item>
          <div className='footerBtn'>
            <Button
              variant='contained'
              style={{ backgroundColor: 'lightBlue', margin: 15 }}
            >
              SCHEDULE ONLINE
            </Button>

            <Button
              variant='contained'
              style={{ backgroundColor: 'lightBlue', margin: 15 }}
            >
              NEW PATIENT INTAKE FORM
            </Button>
          </div>
        </Grid>
      </Grid>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <Grid
            containter
            direction='row'
            alignItems='flex-start'
            justify='space-evenly'
            width='100%'
          >
            <Grid item>
              <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
              </div>
            </Grid>
            <Grid item>
              <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div>
        <small className='website-rights'>
          © 2018 Health Results Inc. | Call Us: (403) 540-7204
        </small>
      </div>
    </div>
  );
}

export default Footer;
