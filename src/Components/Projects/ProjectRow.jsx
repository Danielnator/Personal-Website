import React from "react";
import ProjectWidget from "./ProjectWidget";
import projectsData from "../../Data/projects-data";
import { Link } from "react-router-dom";

class ProjectRow extends React.Component {
  render() {
    return (
      <div className="project-row">
        <br />
        <h1>All Projects</h1>
        <br />
        <div className="row justify-content-start">
          {projectsData.map((project) =>
            project.id !== 4 ? (
              <div key={project.id} className="col-lg-4 col-md-6 col-sm-12">
                <Link to={project.link}>
                  <ProjectWidget data={project} />
                </Link>
              </div>
            ) : (
              <div key="4" className="col-lg-4 col-md-6 col-sm-12">
                <a href="https://danielnator.github.io/wundr-landing-page/index.html">
                  <ProjectWidget data={project} />
                </a>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default ProjectRow;
