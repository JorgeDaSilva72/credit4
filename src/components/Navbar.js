import React, { useState  } from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/*
            <i className="fas fa-piggy-bank"></i>*/}
            <div class="logo-nav">
            <img src="./logo.jpg" alt="logo" width="30px" height="30px"/>

            </div>
            MEILLEURTAUXBANQUE.COM
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nos services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                A propos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nous Contacter
              </Link>
            </li>
          </ul>
          {/*
          {button && <Button>Nous Contacter</Button>}*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
