import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";
import Badge from "../components/Badge";
import BadgeFrom from "../components/BadgeFrom";
import api from "../api";
import PageLoading from "../components/Loading";
class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, form: error });
    }
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                avatar="https://s.gravatar.com/avatar/11efc8ed929adc88aab8cb0100a6a074?s=80
            "
              />
            </div>{" "}
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeFrom
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </React.Fragment>
    );
  }
}
export default BadgeEdit;
