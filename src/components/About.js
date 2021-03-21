import React, { useContext } from 'react';

import { UserContext } from '../user-context';
import reactIcon from '../assets/react-icon.svg';
import nodeIcon from '../assets/nodejs-icon.svg';
import jsIcon from '../assets/javascript-icon.svg';
import htmlIcon from '../assets/html5-icon.svg';
import sassIcon from '../assets/sass-icon.svg';
import bootstrapIcon from '../assets/bootstrap-icon.svg';

export default function About() {
  const { themePref, lightStyle, darkStyle } = useContext(UserContext);

  return (
    <div
      className="about-container"
      style={themePref === 'dark' ? darkStyle : lightStyle}
    >
      <h1 className="about__title">About me</h1>
      <div className="about__body-wrapper">
        <div className="about__body-container">
          <p className="about__content">
            I started coding in December 2018, and I am a self-taught developer.
            I have a passion for good looking and modern websites. I love what I
            do, and I am looking for opportunities in web development. If you
            are upto some project and need collaboration, just let me know!
          </p>
          <div className="about__tech">
            <span>Technologies I use:</span>
            <ul className="about__tech--list">
              <li>
                <img
                  src={reactIcon}
                  className="about__tech--icons icons__react"
                  alt="react logo"
                />
                <span>React.js</span>
              </li>
              <li>
                <img
                  src={nodeIcon}
                  className="about__tech--icons icons__node"
                  alt="nodejs logo"
                />
                <span>Node.js</span>
              </li>
              <li>
                <img
                  src={jsIcon}
                  className="about__tech--icons icons__js"
                  alt="javascript logo"
                />
                <span>Javascript</span>
              </li>
              <li>
                <img
                  src={htmlIcon}
                  className="about__tech--icons icons__html"
                  alt="html logo"
                />
                <span>HTML</span>
              </li>
              <li>
                <img
                  src={sassIcon}
                  className="about__tech--icons icons__sass"
                  alt="scss logo"
                />
                <span>S(CSS)</span>
              </li>
              <li>
                <img
                  src={bootstrapIcon}
                  className="about__tech--icons icons__bootstrap"
                  alt="bootstrap logo"
                />
                <span>Bootstrap</span>
              </li>
            </ul>
          </div>
        </div>
        <img className="about__image" src={reactIcon} alt="profile" />
      </div>
    </div>
  );
}
