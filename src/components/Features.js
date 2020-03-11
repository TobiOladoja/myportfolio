import React from 'react';

const Features = () => {
  return (
    <section className='section-features'>
      <div className='features-container'>
        <div className='features-box one'>
          <i className='features-box__icon'>Icon</i>
          <h3 className='heading-tertiary'>Front End</h3>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>CSS/SCSS</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div className='features-box two'>
          <i className='features-box__icon'>Icon</i>
          <h3 className='heading-tertiary'>Server</h3>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Python</li>
          </ul>
        </div>
        <div className='features-box three'>
          <i className='features-box__icon'>Icon</i>
          <h3 className='heading-tertiary'>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>sss</li>
          </ul>
        </div>
        <div className='features-box four'>
          <i className='features-box__icon'>Icon</i>
          <h3 className='heading-tertiary'>Deployment</h3>
          <ul>
            <li>sss</li>
            <li>sss</li>
            <li>sss</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
