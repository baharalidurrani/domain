import React from "react";
import "./button.css";

class Button extends React.Component {
  render() {
    return (
      <a
        className="btn hoverable center"
        href={this.props.href}
        target={this.props.target}
      >
        {this.props.name}
      </a>
    );
  }
}

export default Button;
