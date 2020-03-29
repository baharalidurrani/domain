import React, { useState } from "react";
import ButtonOut from ".././components/button/ButtonOutlined";

export default function Skills() {
  let data = [
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
    { name: "NodeJS", url: "https://nodejs.org/" },
    { name: "ExpressJS", url: "https://expressjs.com/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "git", url: "https://git-scm.com/" },
    { name: "GitLab", url: "https://gitlab.com/" },
    { name: "CI/CD", url: "https://docs.gitlab.com/ee/ci/" },
    { name: "Heroku", url: "https://www.heroku.com/" },
    { name: "Firebase", url: "https://firebase.google.com/" }
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
