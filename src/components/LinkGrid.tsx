import React from "react";
import ButtonOut from "./button/ButtonOutlined";

interface Props {
  data: { name: string; url: string }[];
}

export default function LinkGrid(props: Props) {
  // eslint-disable-next-line
  // const [skills, setskills] = useState(data);

  return (
    <>
      {props.data.map((skill, i) => (
        <ButtonOut href={skill.url} name={skill.name} key={i}></ButtonOut>
      ))}
    </>
  );
}
