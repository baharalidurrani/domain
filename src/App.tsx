import React from "react";
import "./App.css";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Fieldset from "./components/Fieldset";
import LinkGrid from "./components/LinkGrid";
import skills from "./static/skills";
import interests from "./static/interests";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <h1 className="center">Bahar Ali (Dürrani)</h1>
          <h2 className="center">Software Engineer</h2>
          <br />
          <h3 className="center">Full Stack Developer | DevOps Engineer</h3>
          <div className="containerLarge">
            <p>
              A passionate Software Engineer whose dream is to work on a highly
              scaled application which is used by millions of users, an
              application that is developed using the cutting edge technologies.
              I strongly follow the conventions of a technology that I work on
              so that my work is neat, efficient, readable & reusable. I am
              willing to work both remotely and in person as well.
            </p>
            <Fieldset title="Current Skills">
              <LinkGrid data={skills} />
            </Fieldset>
            <br />
            <Fieldset title="Future Goals">
              <LinkGrid data={interests} />
            </Fieldset>
            <br />
            <Fieldset title="Reach Out">
              <Button
                href="https://gitlab.com/baharalidurrani/resume/raw/master/assets/pdf/bahar-ali.pdf"
                name="Resume"
              ></Button>
              <Button
                href="https://www.upwork.com/o/profiles/users/~012db2e3db02c12429/"
                name="Hire Me"
              ></Button>
              <Button
                href="mailto:baharalidurrani@gmail.com"
                name="Email"
              ></Button>
            </Fieldset>
          </div>
        </div>
        <br />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
