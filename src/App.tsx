import React from "react";
import "./App.css";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Fieldset from "./components/Fieldset";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <h1 className="center">Bahar Ali (Dürrani)</h1>
          <h2 className="center">Software Engineer</h2>
          <br />
          <h3 className="center">Full Stack (MERN) | DevOps Engineer</h3>
          <p className="containerLarge">
            A passionate Software Engineer whose dream is to work on a highly
            scaled application which is used by millions of users, an
            application that is developed using the cutting edge technologies. I
            strongly follow the conventions of a technology that I work on so
            that my work is neat, efficient, readable & reusable. I am willing
            to work both remotely and in person as well.
          </p>
          <div className="containerLarge">
            <Fieldset title="Skills">
              <Skills />
            </Fieldset>
          </div>
          <div className="center">
            <Fieldset title="Resume">
              <Button
                href="https://gitlab.com/baharalidurrani/resume/raw/master/assets/pdf/Resume.pdf"
                name="Download PDF"
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
