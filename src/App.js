import React from "react";
import "./App.css";
import Button from "./components/button/button";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="container">
          <h1 className="center">Coming Soon</h1>
          <br />
          <h3 className="center">
            Thank you for your visit, this website is under construction. We
            will be back soon.
          </h3>
          <br />
          <br />
          <br />
          <div className="center">
            <Button
              href="https://twitter.com/BaharAliDurrani"
              target="_blank"
              name="Follow @BaharAliDurrani for updates!"
            ></Button>
            <br />
            <br />
            <Button
              href="https://gitlab.com/baharalidurrani/resume/raw/master/assets/pdf/Resume.pdf"
              target="_blank"
              name="Download Bahar's Resume"
            ></Button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
