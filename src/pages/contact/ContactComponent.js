import React from "react";
import Header from "../../components/header/Header";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { style } from "glamor";
import { Link } from "react-router-dom";

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                Contact Me
              </h1>
              <SocialMedia />
              <br />
              <br />
              <Link
                to={{ pathname: "/resume" }}
                className={"general-btn"}
                {...styles}
              >
                See my resume
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;
