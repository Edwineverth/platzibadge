import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
import Grabatar from "./Grabatar";
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de conferencia"></img>
        </div>
        <div className="Badge__section-name">
          <Grabatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>@{this.props.twitter}
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}
export default Badge;
