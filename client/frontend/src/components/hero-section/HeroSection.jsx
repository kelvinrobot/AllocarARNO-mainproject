import React, { useState } from "react";
import "./heroSection.css";
import Navbar from "../navbar/Navbar";
import allocarnoLogo from "../../assets/logo/allocarno-logo-2.png";
import notificationIcon from "../../assets/svgs/notificationIcon.svg";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { ButtonOutline } from "../buttons/Buttons";
import heroSectionCursor from "../../assets/svgs/hero-heading-cursor.svg";
import dashboardPreview from "../../assets/svgs/dashboard-preview.svg";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="hero-section-wrapper">
        <div className="hero-section">
          <nav className="navbar">
            <div className="navbar-logo">
              <img src={allocarnoLogo} alt="" />
            </div>

            <div className="navbar-links">
              <Link to="/" className="nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About Allocarno
              </Link>
              <Link to="/universities" className="nav-link">
                For Universities
              </Link>

              <div className="dropdown nav-link">
                <Link
                  to="/"
                  className="flex items-center gap-2 dropdown-toggle"
                >
                  Other{" "}
                  <span>
                    <FaChevronDown className="FaChevronDown" />
                  </span>
                </Link>

                <div className="dropdown-items"></div>
              </div>
            </div>

            <div className="navbar-buttons">
              <Link to="/signup" className="signup-btn">
                Signup
              </Link>
              <Link to="/login">
                <ButtonOutline type="button" value="Log in" />
              </Link>
            </div>
          </nav>

          <div className="hero">
            <div className="notification relative top-[-.5rem]">
              <span>
                <img src={notificationIcon} />
              </span>
              <span className="notification-text">
                10,000+ Smart Schedules Generated
              </span>
            </div>

            <div className="relative hero-text-wrapper top-[-1rem]">
              <div className="relative hero-heading">
                <div>
                  <h1>
                    Enhance Your University <br /> System with{" "}
                    <span className="hero-heading-highlight">Allocarno</span>
                  </h1>
                </div>
                <div className="absolute hero-heading-cusor">
                  <img src={heroSectionCursor} alt="allocarno-cursor" />
                </div>
              </div>

              <div className="hero-paragraph">
                <p>
                  {" "}
                  No more manual planning. Just verified, stress-free timetables
                  powered by AI, secured by Cardano, and built for real academic
                  peace of mind.
                </p>
              </div>
            </div>
            <div className="hero-dashboard-preview-wrapper mt-[2rem]">
              <div className="hero-dashboard-preview w-[100%] mx-auto">
                <img
                  src={dashboardPreview}
                  alt=""
                  className="w-[100%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
