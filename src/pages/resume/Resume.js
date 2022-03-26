import React from "react";
import Header from "../../components/header/Header";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./Resume.css";
import pdf from "./DylanDeCourseyResume.pdf";

export default function Resume(props) {
  return (
    <>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className={"resume"}>
        <h1 className="resume-title-text">Resume</h1>
        <Document file={pdf}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </>
  );
}
