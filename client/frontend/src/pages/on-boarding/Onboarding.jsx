import React, { useState } from "react";
import Container from "../../components/container/Container";
import "./onBoarding.css";
import allocarnoLogo from "../../assets/logo/allocarno-logo.png";
import { PiStudentBold } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      if (selectedOption === "student") {
        window.location.href = "/signup";
      } else if (selectedOption === "lecturer") {
        window.location.href = "/signup";
      } else {
        return;
      }
    } else {
      return;
    }
  };

  return (
    <>
      <div className="onboarding">
        <Container>
          <div className="user-selection-container">
            <div className="logo-container">
              <Link to="/">
                <div className="logo">
                  <img src={allocarnoLogo} alt="allocarno-logo" />
                </div>
              </Link>
            </div>

            <div className="selection-card">
              <h1 className="title">How do you want to use Allocarno?</h1>
              <p className="subtitle">
                This will help us know you and serve you better
              </p>

              <div className="options-container">
                <div
                  className={`option ${
                    selectedOption === "student" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("student")}
                >
                  <div className="option-icon">
                    <PiStudentBold />
                  </div>
                  <span>Student</span>
                </div>

                <div
                  className={`option ${
                    selectedOption === "lecturer" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("lecturer")}
                >
                  <div className="option-icon">
                    <PiStudentFill />
                  </div>
                  <span>Lecturer</span>
                </div>
              </div>

              {selectedOption ? (
                <button
                  className="continue-button"
                  onClick={() => {
                    handleContinue();
                  }}
                >
                  Continue
                </button>
              ) : (
                <button className="continue-button" disabled>
                  Continue
                </button>
              )}

              <p className="login-text">
                Already have an account?{" "}
                <a href="/login" className="login-link">
                  Login
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Onboarding;
