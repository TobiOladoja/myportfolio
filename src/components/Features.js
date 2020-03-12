import React from 'react';

const Features = () => {
  return (
    <section className='section-features'>
      <div className='features-container'>
        <div className='features-box fone'>
          <i className='features-box__icon'>Icon</i>
          <h3 className='heading-tertiary'>Front End</h3>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>CSS/SCSS</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div className='features-box ftwo'>
          <i className='features-box__icon'>Icon</i>
          <h3 className='heading-tertiary'>Server</h3>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Python</li>
          </ul>
        </div>
        <div className='features-box fthree'>
          <i className='features-box__icon'>Icon</i>
          <h3 className='heading-tertiary'>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>sss</li>
          </ul>
        </div>
        <div className='features-box ffour'>
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
