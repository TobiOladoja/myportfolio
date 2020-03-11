import React from 'react';
import Nat1 from '../img/nat-1-large.jpg';
import Nat2 from '../img/nat-2-large.jpg';
import Nat3 from '../img/nat-3-large.jpg';

const About = () => {
  return (
    <section className='section-about'>
      <div className='u-center-text u-margin-bottom-8'>
        <h2 className='heading-secondary'>
          Front end focused with full stack experience
        </h2>
      </div>
      <div className='box-container'>
        <div className='box-1'>
          <h3 className='heading-tertiary'>fff</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            explicabo nemo fugit? Ducimus, eum nostrum optio aliquam veniam
            cumque, vel tenetur saepe ea dignissimos eligendi labore, deleniti
            architecto facere a!
          </p>
          <h3 className='heading-tertiary'>fff</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            explicabo nemo fugit? Ducimus, eum nostrum optio aliquam veniam
            cumque, vel tenetur saepe ea dignissimos eligendi labore, deleniti
            architecto facere a!
          </p>
          <a href='#' className='btn-text'>
            Learn more &rarr;
          </a>
        </div>
        <div className='box-2'>
          <div className='composition'>
            <img
              src={Nat1}
              alt='Photo 1'
              className='composition__photo composition__photo--p1'
            />
            <img
              src={Nat2}
              alt='Photo 2'
              className='composition__photo composition__photo--p2'
            />
            <img
              src={Nat3}
              alt='Photo 3'
              className='composition__photo composition__photo--p3'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
