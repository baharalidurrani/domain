import React from "react";
// import "./App.css";
import Button from "./components/button/button";

function App() {
  return (
    <div className="App container">
      <h1 className="center">Coming Soon</h1>
      <br />
      <h3 className="center">
        Thank you for your visit, this website is under construction. We will be
        back soon.
      </h3>
      <br />
      <br />
      <br />
      <div className="center">
        <Button
          href="https://twitter.com/BaharAliDurrani"
          name="Follow @BaharAliDurrani for updates!"
        ></Button>
        <br />
        <br />
        <Button
          href="https://gitlab.com/baharalidurrani/resume/raw/master/assets/pdf/Resume.pdf?inline=false"
          name="Download Bahar's Resume"
        ></Button>
      </div>
    </div>
  );
}

export default App;
