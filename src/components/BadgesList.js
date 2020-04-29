import React from "react";

import "../components/styles/BadgesList.css";
import { Link } from "react-router-dom";
import Grabatar from "./Grabatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No encontramos ningun dato</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li className="" key={badge.id}>
              <Link
                className="text-reset text-decoration-none BadgesListItem"
                to={`/badges/${badge.id}/edit`}
              >
                <Grabatar
                  className="BadgesListItem__avatar"
                  email={badge.email}
                  alt="Avatar"
                />
                <div>
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                  <div className="Twitter__name">
                    <span className="Twitter__logo"></span>@{badge.twitter}
                  </div>
                  <div>{badge.jobTitle}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default BadgesList;
