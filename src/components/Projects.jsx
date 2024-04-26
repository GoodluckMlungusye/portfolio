import React from "react";
import projects from "../Data/Projects";
import {GITHUB_URL, IMAGE_URL} from "../Data/Constants"

const Projects = () => {

  const displayProjects = projects.map((project) => (
    <div className=" card" key={project.id}>
      <div className="card-content">
        <div className="image" style={{ background: `${project.color}` }}>
          <img src={`${IMAGE_URL}/${project.image}`} alt={project.name} />
        </div>

        <div className="details">
          <span className="name">{project.name}</span>
          <span className="technology">{`Developed from ${project.technology}`}</span>
          <div className="flex items-center">
            <span className="rate">{project.rate}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              style={{ color: `${project.color}` }}
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="button">
          <button
            style={{ background: `${project.color}` }}>
            <a href={`${GITHUB_URL}/${project.link}`} target="_blank" rel="noreferrer" className="flex items-center">
              <span>View Project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div id="projects" className="projects">
      <div className="title">
        <h3>
          <span>P</span>rojects
        </h3>
      </div>

      <div className="project-container">
        {displayProjects}
      </div>
      <div className="viewmore">
        <a  href='https://github.com/GoodluckMlungusye?tab=repositories' target="_blank" rel="noopener noreferrer">
          <button className="morebtn">
            more projects
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
