import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeFrom from "../components/BadgeFrom";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Edwin"
                lastName="Belduma"
                twtter="edwineverth94"
                jobTitle="Developer"
                avatar="https://s.gravatar.com/avatar/11efc8ed929adc88aab8cb0100a6a074?s=80
"
              />
            </div>
            <div className="col-6">
              <BadgeFrom />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
