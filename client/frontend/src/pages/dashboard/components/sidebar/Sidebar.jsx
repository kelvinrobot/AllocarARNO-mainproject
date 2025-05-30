import { Link, useNavigate } from "react-router-dom";
import { BiSolidUpArrow } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineCloudUpload } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { SiDavinciresolve } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { BsSave } from "react-icons/bs";
import { useAuth } from "../../../../context/AuthContext";

const Sidebar = ({ currentPage }) => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      signout();
      navigate("/login");
    } catch (error) {
      alert("Error logging out");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <div className="flex items-center gap-4 pl-2 sidebar-header">
          <h3>Timetable Manager</h3>
          <span>
            <BiSolidUpArrow />
          </span>
        </div>
        <ul className="sidebar-menu">
          <Link to="/dashboard">
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
          <Link to="/upload">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "upload" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <MdOutlineCloudUpload />
              </span>
              <p> Upload Data</p>
            </li>
          </Link>

          {/* generate timetable page */}
          <Link to="/generate-timetable">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "generate" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <RiAiGenerate />
              </span>
              <p>Generate Timetable</p>
            </li>
          </Link>

          {/* publish to blockchain page */}
          <Link to="/publish">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "publish" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <MdOutlinePublishedWithChanges />
              </span>
              <p>Publish to Blockchain</p>
            </li>
          </Link>

          {/* resolve conflict */}
          <Link to="/resolve-conflicts">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "resolve" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <SiDavinciresolve />
              </span>
              <p>Resolve Conflicts</p>
            </li>
          </Link>

          {/* Transaction logs page */}
          <Link to="/transactions">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "transaction" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <GrTransaction />
              </span>
              <p>Transaction logs</p>
            </li>
          </Link>

          {/* saved drafts page */}
          <Link to="/saved-drafts">
            <li
              className={`flex items-center gap-4 ${
                currentPage === "saves-draft" ? "active" : ""
              }`}
            >
              <span className="menu-icon">
                <BsSave />
              </span>
              <p>Saved Draft</p>
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
            <p onClick={handleLogout}>Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
