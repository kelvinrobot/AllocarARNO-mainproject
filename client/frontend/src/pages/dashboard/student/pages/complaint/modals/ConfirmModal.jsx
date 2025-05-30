"use client";

import { useState, useEffect } from "react";
import "./modal.css";
import { CgClose } from "react-icons/cg";

const ConfirmModal = ({ onClose, onConfirm }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 280); // Slightly less than animation duration to avoid flicker
  };

  const handleConfirm = () => {
    setIsClosing(true);
    setTimeout(() => {
      onConfirm();
    }, 280);
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
    <div className="">
      <div className={`modal-overlay ${isClosing ? "closing" : ""}`}>
        <div
          className={`modal-container ${isClosing ? "closing" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between modal-container-header">
            <h2 className="modal-title">
              Are you sure you want to submit this complaint?
            </h2>
            <button className="close-button" onClick={handleClose}>
              <CgClose className="text-[20px]" />
            </button>
          </div>

          <div className="modal-body px-[54px] py-[44px]">
            <p className="modal-text">
              Please confirm that all the information you've entered is
              accurate. <br /> Once submitted, your complaint will be sent to
              the admin team for review.
            </p>

            <div className="modal-buttons">
              <button className="cancel-btn" onClick={handleClose}>
                Cancel
              </button>
              <button className="submit-btn" onClick={handleConfirm}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
