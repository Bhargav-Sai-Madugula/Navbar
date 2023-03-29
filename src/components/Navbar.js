import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">My Logo</div>
      <div className="navbar__links">
        <a href="#" className="navbar__link">
          Home
        </a>
        <a href="#" className="navbar__link">
          About
        </a>
        <a href="#" className="navbar__link">
          Contact
        </a>
      </div>
      <FontAwesomeIcon
        icon="bars"
        className="navbar__menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
