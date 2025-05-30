import React from "react";
import { Link } from "react-router-dom";
import { BiSolidUpArrow } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { BiMessageError } from "react-icons/bi";

const Sidebar = ({ currentPage }) => {
  return (
    <div className="sidebar student-sidebar">
      <div className="sidebar-section">
        <ul className="sidebar-menu">
          <Link to="/student">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "dashboard" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <LuLayoutDashboard />
              </span>
              <p> Dashboard</p>
            </li>
          </Link>

          {/* upload data page */}
          <Link to="/student/registration">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "registration" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <IoPersonAddOutline />
              </span>
              <p> Registration</p>
            </li>
          </Link>

          {/* generate timetable page */}
          <Link to="/student/timetable">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "timetable" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <LiaBusinessTimeSolid />
              </span>
              <p>Timetable</p>
            </li>
          </Link>

          {/* publish to blockchain page */}
          <Link to="/student/complain">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "complain" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <BiMessageError />
              </span>
              <p>Make Complait</p>
            </li>
          </Link>
        </ul>
      </div>

      <div className="mt-12 mb-8 sidebar-section">
        <div className="flex items-center gap-4 sidebar-header system-preference">
          <h3>System Preference</h3>
          <span>
            <BiSolidUpArrow />
          </span>
        </div>
        <ul className="sidebar-menu">
          {/* settings */}
          <Link to="/settings">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "settings" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <IoIosSettings />
              </span>
              <p>Settings</p>
            </li>
          </Link>
        </ul>
      </div>

      <div className="sidebar-footer">
        <ul className="sidebar-menu">
          <li className="flex items-center gap-4">
            <span className="menu-icon">
              <IoLogOutOutline />
            </span>
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
