import React from "react";

import "../components/styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              <img
                src={badge.avatarUrl}
                alt=""
                className="BadgesListItem__avatar"
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
            </li>
          );
        })}
      </ul>
    );
  }
}
export default BadgesList;
