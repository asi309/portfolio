import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import githubIcon from '../assets/github.svg';
import externalIcon from '../assets/external.svg';

export default function ProjectItem(props) {
  const { title, description, github } = props;
  const image = props.image || 'images/default.jpg';
  const link = props.link || '';

  return (
    <li className="project__list--item">
      <img className="project__list--item-cover" src={`${image}`} alt={title} />
      <div className="project__list--item-content">
        <div className="project__list--item-summary">
          <h2>{title}</h2>
          <div className="project__list--item-description">
            <span>{ReactHtmlParser(description)}</span>
          </div>
        </div>
        <div className="project__list--item-actions">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src={githubIcon}
              className="project__icons github-icon"
              alt="Github"
            />
          </a>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={externalIcon}
                className="project__icons external-icon"
                alt="External"
              />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
