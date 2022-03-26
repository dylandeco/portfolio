import React from "react";
import "./ImageCard.css";
import { Fade } from "react-reveal";

const ImageCard = ({ link }) => {
  return (
    <Fade bottom duration={1500}>
      <div className="picture">
        <img className="img" src={link} alt="img" />
      </div>
    </Fade>
  );
};

export default ImageCard;
