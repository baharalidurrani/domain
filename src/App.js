import React from "react";
import "./App.css";
import Button from "./components/button/button";
import ButtonOut from "./components/button/buttonOutlined";
import Footer from "./components/footer/footer";

function App() {
  var skills = [
    { name: "GNU/Linux", url: "https://www.linuxfoundation.org/" },
    { name: "HTML", url: "https://github.com/whatwg" },
    { name: "CSS", url: "https://www.w3.org/Style/CSS/" },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    { name: "EJS Engine", url: "https://ejs.co/" },
    { name: "ReactJS", url: "https://reactjs.org/" },
    { name: "NodeJS", url: "https://nodejs.org/" },
    { name: "ExpressJS", url: "https://expressjs.com/" },
    { name: "MongoDB", url: "https://www.mongodb.com/" },
    { name: "Git", url: "https://git-scm.com/" },
    { name: "GitLab", url: "https://gitlab.com/" },
    { name: "CI/CD", url: "https://docs.gitlab.com/ee/ci/" },
    { name: "Heroku", url: "https://www.heroku.com/" },
    { name: "Firebase", url: "https://firebase.google.com/" }
    // { name: "", url: "" },
  ];
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <h1 className="center">Bahar Ali (Durrani)</h1>
          <h2 className="center">Software Engineer</h2>
          <br />
          <h3 className="center">MERN Developer | DevOps Engineer</h3>
          <div className="container">
            <fieldset>
              <legend>
                <h2 className="noMargin">Skills</h2>
              </legend>
              {skills.map(skill => (
                <ButtonOut href={skill.url} name={skill.name}></ButtonOut>
              ))}
            </fieldset>
          </div>
          <div className="center">
            <fieldset>
              <legend>
                <h2 className="noMargin">Resume</h2>
              </legend>
              <Button
                href="https://novoresume.com/a/baharalidurrani.1"
                name="View Online"
              ></Button>
              <Button
                href="https://gitlab.com/baharalidurrani/resume/raw/master/assets/pdf/Resume.pdf"
                name="Download PDF"
              ></Button>
            </fieldset>
          </div>
        </div>
        <br />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
