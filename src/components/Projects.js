import React from 'react';
import { projects } from '../constant';

export function Projects() {
  return (
    <section class='section-3' id='section-3'>
      <h1 class='section-heading section-3-heading'>Projects</h1>
      <div class='projects-wrapper center'>
        {projects.map((project) => {
          return (
            <div class='project' key={project.id}>
              <div class='project-text'>
                <h2 class='project-name'>{project.name}</h2>
                <h4 class='project-technologies'>{project.tech}</h4>
              </div>
              <img src={project.banner} class='project-img' alt='project' />
              <div className='project-link-box'>
                <a
                  href={project.code}
                  class='project-link-left'
                  target='_blank'
                  rel='noreferrer'
                >
                  Source Code
                </a>
                <a
                  href={project.demo}
                  class='project-link-right'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
