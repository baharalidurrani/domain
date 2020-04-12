import React, { useState } from "react";
import ButtonOut from "./button/ButtonOutlined";

export default function Skills() {
  const data = [
    { name: "GNU/Linux", url: "https://www.linuxfoundation.org/" },
    { name: "Docker", url: "https://www.docker.com/" },
    { name: "HTML", url: "https://github.com/whatwg" },
    { name: "CSS", url: "https://www.w3.org/Style/CSS/" },
    { name: "EJS Engine", url: "https://ejs.co/" },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org"
    },
    { name: "ReactJS", url: "https://reactjs.org/" },
    { name: "Redux", url: "https://redux.js.org/" },
    { name: "NodeJS", url: "https://nodejs.org/" },
    { name: "ExpressJS", url: "https://expressjs.com/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "GitLab", url: "https://gitlab.com/baharalidurrani/" },
    { name: "GitHub", url: "https://github.com/baharalidurrani/" },
    { name: "CI/CD", url: "https://docs.gitlab.com/ee/ci/" },
    { name: "Heroku", url: "https://www.heroku.com/" },
    { name: "Firebase", url: "https://firebase.google.com/" },
    { name: "Google Cloud", url: "https://cloud.google.com/" },
    { name: "AWS", url: "https://aws.amazon.com/" },
    { name: "ffmpeg", url: "http://ffmpeg.org/" }
    // { name: "", url: "" },
  ];
  // eslint-disable-next-line
  const [skills, setskills] = useState(data);

  return (
    <>
      {skills.map((skill, i) => (
        <ButtonOut href={skill.url} name={skill.name} key={i}></ButtonOut>
      ))}
    </>
  );
}
