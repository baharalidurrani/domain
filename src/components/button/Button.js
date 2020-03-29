import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <a
      className="btn hoverable center"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
    </a>
  );
}
