import React from "react";

export default function Fieldset(props) {
  return (
    <fieldset>
      <legend>
        <h2 className="noMargin">{props.title}</h2>
      </legend>
      {props.children}
    </fieldset>
  );
}
