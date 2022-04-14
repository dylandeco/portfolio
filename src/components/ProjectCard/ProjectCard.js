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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });
  return (
    <Link
      to={{ pathname: "projects/" + project.name, state: { project } }}
      style={{ textDecoration: "none" }}
    >
      <Fade left duration={1000}>
        <div {...styles} key={project.id}>
          <div
            className="repo-name-div"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p className="repo-name" style={{ color: theme.text }}>
              {project.name}
            </p>
            <p
              className="repo-name"
              style={{ color: theme.text, fontSize: "16px" }}
            >
              View Project
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {project.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages
              logos={project.languages}
              github={project.github}
            />
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <span
                  className="iconify github-icon"
                  data-icon={"logos:github-icon"}
                  data-inline="false"
                ></span>
              </a>
            )}
          </div>
        </div>
      </Fade>
    </Link>
  );
}
