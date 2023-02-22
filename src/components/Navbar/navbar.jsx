import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <NavLink className="navbar__link" to="/">
            Главная
          </NavLink>
          <NavLink className="navbar__link" to="/dialog">
            Диалог
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
