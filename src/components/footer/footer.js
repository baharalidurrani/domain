import React from "react";
import "./footer.css";
import GitlabLogo from "./gitlab.svg";
import ReactLogo from "./react.svg";
import CloudLogo from "./cloud.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="content center">
          <div className="center">
            <span>Powered By</span>
            <br />
            <a
              className="powerLogo"
              href="https://gitlab.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitlabLogo} height="40px" alt="" />
            </a>
            <a
              className="powerLogo"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ReactLogo} height="40px" alt="" />
            </a>
            <a
              className="powerLogo"
              href="https://cloud.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CloudLogo} height="40px" alt="" />
            </a>
          </div>
        </div>
        <div className="copyRight">
          <small className="center">
            Copyright &copy; {new Date().getFullYear()} Bahar Ali Durrani. All
            Rights Reserved.
          </small>
        </div>
      </div>
    );
  }
}

export default Footer;
