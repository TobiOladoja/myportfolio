import React from 'react';
import Logo from '../img/logo-white.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img src={Logo} alt='Logo' className='header__logo' />
      </div>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Tobi Oladoja</span>
          <span className='heading-primary--sub'>Full-Stack Developer</span>
        </h1>

        <a href='#' className='btn btn--white btn--animated'>
          See Projects
        </a>
      </div>
    </header>
  );
};

export default Header;
