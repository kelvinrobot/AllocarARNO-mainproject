import { useState } from "react";
import "./signup.css";
import { PiGenderIntersexDuotone, PiStudentLight } from "react-icons/pi";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import dashboardPreview from "../../assets/images/dashboard-preview.png";
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    motto: "",
    phone: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        firstName,
        lastName,
        email,
        gender,
        password,
        confirmPassword,
        category,
      } = formData;

      const emptyInputs =
        !firstName ||
        !lastName ||
        !email ||
        !gender ||
        !password ||
        !confirmPassword ||
        !category;

      if (emptyInputs) {
        alert("Ensure all input fields are filled.");
        return;
      }

      if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const { confirmPassword: _, ...dataToSubmit } = formData;

      await signup(dataToSubmit);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-container student">
      <div className="signup-form-section">
        <div className="signup-form-content">
          <h1 className="signup-title">Create an Allocarno account</h1>
          <p className="signup-subtitle">
            The future of academic scheduling starts now
          </p>

          <form onSubmit={handleSubmit}>
            {/* School Info */}
            <h2 className="section-title">School Information</h2>
            <div className="input-field">
              <input
                type="text"
                name="name"
                placeholder="School Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <span className="input-icon">
                <PiStudentLight />
              </span>
              <input
                type="text"
                name="email"
                placeholder="School Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="phone"
                placeholder="School Phone No."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="motto"
                placeholder="Motto"
                value={formData.motto}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="address"
                placeholder="School Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select School Category
                </option>
                <option value="college">College</option>
                <option value="secondary">Secondary</option>
                <option value="primary">Primary</option>
                <option value="university">University</option>
                <option value="polytechnic">Polytechnic</option>
              </select>
            </div>

            {/* Personal Info */}
            <h2 className="section-title">Personal Information</h2>
            <div className="name-fields">
              <div className="input-field">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <span className="input-icon">
                <PiGenderIntersexDuotone />
              </span>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Password */}
            <div className="input-field password-field">
              <span className="input-icon">
                <CiLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="input-field password-field">
              <span className="input-icon">
                <CiLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>

            <div className="terms-text">
              By creating an account, you agree to our{" "}
              <a href="#" className="policy-link">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="policy-link">
                Electronics Communication Policy
              </a>
              .
            </div>

            <button
              type="submit"
              className="signup-button"
              style={{ marginBottom: "10px" }}
            >
              Signup
            </button>

            <p style={{ fontWeight: 600 }}>
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Login
              </Link>
            </p>
          </form>

          <div className="flex items-center justify-between signup-page-footer">
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

export default Signup;
