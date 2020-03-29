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
          <h1 className="center">Bahar Ali (Durrani)</h1>
          <h2 className="center">Software Engineer</h2>
          <br />
          <h3 className="center">Full Stack (MERN) | DevOps Engineer</h3>
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
