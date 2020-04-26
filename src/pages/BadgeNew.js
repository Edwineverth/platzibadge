import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeFrom from "../components/BadgeFrom";
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twtter: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
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
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twtter={this.state.form.twtter}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                avatar="https://s.gravatar.com/avatar/11efc8ed929adc88aab8cb0100a6a074?s=80
"
              />
            </div>
            <div className="col-6">
              <BadgeFrom
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
