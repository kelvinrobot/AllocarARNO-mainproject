"use client";

import { useState, useEffect } from "react";
import "./modal.css";

const SuccessModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 280); // Slightly less than animation duration to avoid flicker
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div
      className={`modal-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`modal-container ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sucessModal p-[50px]">
          <div className="success-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
                fill="white"
              />
            </svg>
          </div>
          <h2 className="modal-title success-title">SUBMITTED</h2>

          <p className="modal-text">
            We've received your complaint and it's now under review. You'll get
            notified once it's resolved
          </p>

          <div className="modal-buttons centered">
            <button className="go-back-btn" onClick={handleClose}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
