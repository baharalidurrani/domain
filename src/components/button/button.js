import React from "react";
import "./button.css";

class Button extends React.Component {
  render() {
    return (
      <a
        className="btn hoverable center"
        href={this.props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {this.props.name}
      </a>
    );
  }
}

export default Button;
