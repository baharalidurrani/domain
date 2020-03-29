import React from "react";
import "./ButtonOutlined.css";

interface Props {
  href: string;
  name: string;
}

export default function Button(props: Props) {
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
