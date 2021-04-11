import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './NavBar.css';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import { blueGrey, lightBlue } from '@material-ui/core/colors';

const primary = lightBlue[300];
const secondary = blueGrey[300];

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Health Results
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>
            {/*<li className='nav-item'>
              <Link to='/rates' className='nav-links' onClick={closeMobileMenu}>
                Rates
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/testimonials'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Testimonials
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/treatments'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Treatments
              </Link>
            </li>
          </ul>
          {button && (
            <Button variant='contained' color={secondary}>
              Login
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
