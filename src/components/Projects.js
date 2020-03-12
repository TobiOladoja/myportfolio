import React from 'react';
import Nat1 from '../img/nat-1-large.jpg';
import Nat2 from '../img/nat-2-large.jpg';
import Nat3 from '../img/nat-3-large.jpg';

const Projects = () => {
  return (
    <section className='section-projects'>
      <div className='projects-container'>
        <div className='projects-box one'>
          <img src={Nat1} alt='Photo 1' className='projects-box__picture--1' />
          <h3 className='card-heading'>PROJECT TITLE</h3>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>CSS/SCSS</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div className='projects-box two'>
          <img src={Nat1} alt='Photo 2' className='projects-box__picture--2' />
          <h3 className='card-heading'>PROJECT TITLE</h3>
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>Python</li>
          </ul>
        </div>
        <div className='projects-box three'>
          <img src={Nat1} alt='Photo 3' className='projects-box__picture--3' />
          <h3 className='card-heading'>PROJECT TITLE</h3>
          <ul>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>sss</li>
          </ul>
        </div>
        <div className='projects-box four'>
          <img src={Nat1} alt='Photo 4' className='projects-box__picture--4' />
          <h3 className='card-heading'>PROJECT TITLE</h3>
          <ul>
            <li>React</li>
            <li>sss</li>
            <li>sss</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
