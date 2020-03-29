import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Fieldset(props: Props) {
  return (
    <fieldset>
      <legend>
        <h2 className="noMargin">{props.title}</h2>
      </legend>
      {props.children}
    </fieldset>
  );
}
