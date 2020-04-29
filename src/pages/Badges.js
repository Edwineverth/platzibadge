import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import api from "../api";
import PageLoading from "../components/Loading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";
class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor");
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Intermedio Update");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({ propsAct: this.props, stateAct: this.state });
  }
  componentDidMount() {
    console.log("3. Desmonta componente");
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentWillUnmount() {
    console.log("6. ComponentWillUnmount");
    clearInterval(this.intervalId);
    //clearTimeout(this.timeuotId);
  }
  render() {
    console.log("2. Renderiza componente");
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="badges/new" className="btn btn-primary">
              New Badges
            </Link>
          </div>
          <div className="BadgesList">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              {this.state.loading && <MiniLoader />}
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
