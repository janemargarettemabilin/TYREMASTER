import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./AuthModal.css";

const AuthModal = ({ show, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Initialize navigate for redirection

  if (!show) return null;

  const handleSelect = (option) => {
    setSelectedOption(option); // Select the authentication option
  };

  const handleSubmit = () => {
    if (selectedOption) {
      alert(`Authentication via ${selectedOption} successful!`);
      navigate("/home"); // Redirect to the home page
    } else {
      alert("Please select an authentication method.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="back-button">
          <span className="arrow" onClick={onClose}>
            &larr;
          </span>
          <span className="back-text">Select Authentication Method</span>
        </div>
        <div className="auth-options">
          <div
            className={`auth-option ${
              selectedOption === "passkey" ? "selected" : ""
            }`}
            onClick={() => handleSelect("passkey")}
          >
            <img src="/password.png" alt="Passkey" />
            <p>Enter your passkey.</p>
          </div>
          <div
            className={`auth-option ${
              selectedOption === "fingerprint" ? "selected" : ""
            }`}
            onClick={() => handleSelect("fingerprint")}
          >
            <img src="/fingerprint.png" alt="Fingerprint" />
            <p>Place your finger at the fingerprint sensor.</p>
          </div>
          <div
            className={`auth-option ${
              selectedOption === "facial" ? "selected" : ""
            }`}
            onClick={() => handleSelect("facial")}
          >
            <img src="/recognition.png" alt="Facial Recognition" />
            <p>Move closer to the circle for facial recognition.</p>
          </div>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
