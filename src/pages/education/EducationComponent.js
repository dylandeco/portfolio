import React from "react";
import Header from "../../components/header/Header";
import Educations from "../../containers/education/Educations";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
      </div>
    </div>
  );
}

export default Education;
