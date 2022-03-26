import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import ImageCard from "../../components/ImageCard/ImageCard";
import "./Project.css";

function Project(props) {
  let params = useParams();
  console.log(props.location.state);
  return (
    <div className="project-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      {params.projectName === "NewConnection" ? (
        <>
          <h1 className="project-title-text">{params.projectName}</h1>
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/vxiC2ZZK03w"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </div>
        </>
      ) : (
        <>
          <h1 className="project-title-text">{params.projectName}</h1>
          <div className="project-cards-div-main">
            {props.location.state.project.images.map((image, index) => {
              return (
                <ImageCard
                  key={index}
                  link={require(`../../assests/images${image}`)}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
