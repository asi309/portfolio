import React, { useContext } from 'react';

import { UserContext } from '../user-context';
import PROJECTS from '../myProjects';
import ProjectItem from './ProjectItem';

export default function Projects() {
  const { themePref, lightStyle, darkStyle } = useContext(UserContext);

  return (
    <div
      className="project-container"
      style={themePref === 'dark' ? darkStyle : lightStyle}
    >
      <h1 className="project__title">My Projects</h1>
      <ul className="project__list">
        {PROJECTS.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            link={project.link}
          />
        ))}
      </ul>
    </div>
  );
}
