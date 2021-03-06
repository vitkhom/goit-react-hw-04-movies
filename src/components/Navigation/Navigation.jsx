import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="nav_container">
      <ul className="navigation">
        <li>
          <NavLink
            exact
            to="/"
            className="navigation__link"
            activeClassName="navigation__link-active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="navigation__link"
            activeClassName="navigation__link-active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
