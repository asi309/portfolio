import React, { useContext } from 'react';

import { UserContext } from '../user-context';
// import api from '../service/api';
import attachmentIcon from '../assets/attachment.svg';
import emailIcon from '../assets/email.svg';
import githubIcon from '../assets/github.svg';
import igIcon from '../assets/ig.svg';
import linkedinIcon from '../assets/linkedin.svg';

export default function Footer() {
  const { themePref, lightStyle, darkStyle } = useContext(UserContext);

  // const resumeHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await api.get('/resume', { responseType: 'blob' });

  //     const file = new Blob([response.data], { type: 'application/pdf' });
  //     const fileURL = URL.createObjectURL(file);

  //     const newWindow = window.open();
  //     newWindow.location.href = fileURL;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <footer style={themePref === 'dark' ? darkStyle : lightStyle}>
      <div className="footer-container">
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://www.instagram.com/_asiii80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={igIcon}
              className="footer__link--icons ig-icon"
              alt="instagram icon"
            />
          </a>
          <a
            className="footer__link"
            href="https://github.com/asi309"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              className="footer__link--icons github-icon"
              alt="github icon"
            />
          </a>
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/asidipta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              className="footer__link--icons linkedin-icon"
              alt="linkedin icon"
            />
          </a>
          <a
            className="footer__link"
            href="mailto:asidiptachaudhuri@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={emailIcon}
              className="footer__link--icons email-icon"
              alt="email icon"
            />
          </a>
          <a
            className="footer__link"
            href="https://portfolio-asi309.s3.amazonaws.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={attachmentIcon}
              className="footer__link--icons attachment-icon"
              alt="attachment icon"
            />
          </a>
        </div>
        <div className="copyright-container">
          <div className="copyright__text">
            Copyright &copy; Asidipta Chaudhuri 2021
          </div>
        </div>
      </div>
    </footer>
  );
}
