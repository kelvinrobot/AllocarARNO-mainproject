import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { PiStudentLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import dashboardPreview from "../../assets/images/dashboard-preview.png";
import { useAuth } from "../../context/AuthContext";

const StudentLogin = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password must be a minimum of 8 characters.");
      return;
    }

    await signin({ email, password });
    navigate("/dashboard");
  };
  return (
    <div className="student-login-container student">
      <div className="login-form-section">
        <div className="login-form-content">
          <h1 className="login-title">Student's Login</h1>
          <p className="login-subtitle">
            The future of academic scheduling starts now
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-1 form-label">
              <div className="separator"></div>
              <p className="input-text">ENTER YOUR CREDENTIALS</p>
              <div className="separator"></div>
            </div>

            <div className="input-container">
              <span className="input-icon">
                <PiStudentLight />
              </span>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-container password">
              <span className="input-icon">
                <CiLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>

          <p style={{ fontWeight: 600 }}>
            Don&apos;t have an account?{" "}
            <Link to={"/signup"} className="login-link">
              Signup
            </Link>
          </p>

          <div className="flex items-center justify-between login-page-footer">
            <Link>
              <p>Privacy Policy</p>
            </Link>

            <Link>
              <p>Copyright 2025</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="dashboard-preview-section">
        <div className="dashboard-preview">
          <div className="dashboard-preview-image">
            <img src={dashboardPreview} alt="dashboard preview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
