import React from "react";
import "./ButtonOutlined.css";

export default function Button(props) {
  return (
    <a
      className="btnOut hoverable center"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
    </a>
  );
}
