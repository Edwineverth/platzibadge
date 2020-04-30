import React from "react";

import "../components/styles/BadgesList.css";
import { Link } from "react-router-dom";
import Grabatar from "./Grabatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName.toLowerCase()} ${badge.lastName.toLowerCase()}`.includes(
        query.toLowerCase()
      );
    });
    setFilteredBadges(result);
  }, [badges, query]);
  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="from-group m-md-3">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No encontramos ningun dato</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new Badge
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="from-group m-md-3">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled BadgesList">
        {filteredBadges.map((badge) => {
          return (
            <li className="" key={badge.id}>
              <Link
                className="text-reset text-decoration-none BadgesListItem"
                to={`/badges/${badge.id}`}
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
    </div>
  );
}

export default BadgesList;
