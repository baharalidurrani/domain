import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
          <div className="center">
            <span>Powered By</span>
            <br />
            <a
              href="http://gitlab.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg"
                height="40vh"
                alt=""
              />
            </a>
            <a
              href="https://cloud.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/Google_Cloud_Logo.svg"
                height="40vh"
                alt=""
              />
            </a>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                height="40vh"
                alt=""
              />
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
