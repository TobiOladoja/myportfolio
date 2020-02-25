import React from 'react';
import Logo from '../img/logo-white.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src={Logo} alt='Logo' className='logo' />
      </div>
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>Tobi Oladoja</span>
          <span className='heading-primary-sub'>Full-Stack Developer</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
