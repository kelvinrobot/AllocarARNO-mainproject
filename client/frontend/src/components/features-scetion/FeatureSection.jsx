import React from "react";
import "./feature-section.css";
import { TbSettingsAutomation } from "react-icons/tb";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <div className="feature-content">
          <h2 className="feature-heading">
            Like a <span className="highlight">Smart Assistant</span> for
            <br />
            University Scheduling
          </h2>

          <p className="feature-description">
            Built to eliminate the chaos of class clashes, Allocarno helps
            institutions move from spreadsheets to intelligent,
            blockchain-verified timetables.
          </p>

          <p className="feature-description">
            We've reimagined how universities schedule classes giving admins,
            lecturers, and students a seamless way to manage academic calendars,
            avoid overlaps, and verify schedules on-chain.
            <br />
            Everything you need, automated and unified in one powerful platform.
          </p>
        </div>

        <div className="feature-cards">
          <div className="feature-card">
            <div className="icon-container blue">
              <TbSettingsAutomation />
            </div>
            <h3>Automate</h3>
            <p>
              Say goodbye to manual planning. Automatically generate
              conflict-free timetables in seconds using AI.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container blue">
              <RiVerifiedBadgeLine />
            </div>
            <h3>Verify</h3>
            <p>
              Each schedule is logged on the Cardano blockchain, making it
              tamper-proof and trusted across departments.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container blue">
              <FaRegEdit />
            </div>
            <h3>Customize</h3>
            <p>
              Tailor timetable preferences for different departments, lecturers,
              and academic structures effortlessly.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container blue">
              <GrLineChart />
            </div>
            <h3>Track</h3>
            <p>
              Monitor and manage schedules via smart dashboards that give
              real-time visibility and control.
            </p>
          </div>
        </div>
      </div>
      <Link to="/signup">
        <button className="discover-button mt-[.5rem]">
          Discover the platform
          <FaArrowRightLong className="relative mt-[.3rem]" />
        </button>
      </Link>
    </section>
  );
};

export default FeatureSection;
