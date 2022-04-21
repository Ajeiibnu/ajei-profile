import React from "react"
import "./style.css";

function PreLoaders(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default PreLoaders;