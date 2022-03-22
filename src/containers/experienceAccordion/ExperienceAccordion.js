import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      {props.sections["experiences"].map((experience) => {
        return <ExperienceCard experience={experience} theme={theme} />;
      })}
    </div>
  );
}

export default ExperienceAccordion;
