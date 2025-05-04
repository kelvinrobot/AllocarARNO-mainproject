import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { ButtonSolid, ButtonOutline } from "../buttons/Buttons";
import { FaChevronDown } from "react-icons/fa6";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar">
        <div className="logo">
          <h3>ALLOCARNO</h3>
        </div>

        {/* LARGE SCREEN  NAV LINKS */}
        <div className="nav-links">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/about-allocarno">About Allocarno</Link>
          <Link to="/for-universities">For Universities</Link>
          <div className="dropdown">
            <Link to="/" className="flex items-center gap-2 dropdown-toggle">
              Other{" "}
              <span>
                <FaChevronDown className="FaChevronDown" />
              </span>
            </Link>

            <div className="dropdown-items"></div>
          </div>
          <div className="flex items-center gap-4 auth-buttons">
            <Link to="/dashboard">
              <ButtonSolid value="Join Beta" />
            </Link>
            <Link to="/login">
              <ButtonOutline value="Log in" />
            </Link>
          </div>
        </div>

        {/* MOBILE NAV LINKS */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
