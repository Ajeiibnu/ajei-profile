import React from "react";
import './style.css';

export default function Title(props) {
  return (
    <div class="title-section text-left text-sm-center">
      <h1>{props.frontText}</h1>
      <span class="title-bg">{props.backText}</span>
    </div>
  )
}
