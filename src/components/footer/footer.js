import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
          <div class="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
