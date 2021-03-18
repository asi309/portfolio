import React from 'react';

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="portfolio__title-container">
        <p>Hi, I am</p>
        <h1 className="portfolio__title">Asidipta Chaudhuri</h1>
      </div>
      <p className="portfolio__subtitle">
        I am a Web Developer and Full Stack Enginner out of Kolkata.
        <br />
        Scroll down to find out more about me.
      </p>
      <a href="#contact" className="button">
        Get in touch
      </a>
    </div>
  );
}
