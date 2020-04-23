import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de conferencia"></img>
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
          ></img>
          <h1>
            Edwin <br />
            Belduma
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Full Stack Developer</h3>
          @edwineverth94
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}
export default Badge;
