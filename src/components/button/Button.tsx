import React from "react";
import "./Button.css";

interface Props {
  href: string;
  name: string;
}

export default function Button(props: Props) {
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
