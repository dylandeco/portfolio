import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, theme }) {
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "#167742eb",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });
  return (
    <Link
      to={{ pathname: "project/" + project.name, state: { project } }}
      style={{ textDecoration: "none" }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div {...styles} key={project.id}>
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {project.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {project.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={project.languages} />
          </div>
        </div>
      </Fade>
    </Link>
  );
}
