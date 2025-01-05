import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AuthModal from "../auth/AuthModal";

const Login = () => {
  const [username, setUsername] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleNext = () => {
    if (username.trim()) {
      setShowAuthModal(true);
    } else {
      alert("Please enter a username.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logo.png" alt="Tyremaster Logo" className="logo" />
        <h2>Sign in</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <button className="login-button" onClick={handleNext}>
          Next
        </button>
        <p>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <AuthModal show={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Login;
