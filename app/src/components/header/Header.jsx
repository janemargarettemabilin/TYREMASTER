import React, { useState } from "react";
import "./Header.css";

const Header = ({ username = "Admin1234", department = "Accounting Department" }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    // Perform logout functionality here
  };

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="header-left">
        <img src="/logo.png" alt="Tyremaster Logo" className="header-logo" />
      </div>

      {/* Center: Navigation Tabs */}
      <nav className="header-tabs">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/operations">Operations</a></li>
          <li><a href="/cashier">Cashier</a></li>
          <li><a href="/billing">Billing & Collection</a></li>
          <li><a href="/reports">Reports</a></li>
        </ul>
      </nav>

      {/* Right: Admin Profile */}
      <div className="header-right">
        <div className="profile" onClick={toggleDropdown}>
          <img
            src="/profile.png"
            alt="Admin Profile"
            className="profile-img"
          />
          <div className="profile-info">
            <span className="profile-username">{username}</span>
            <span className="profile-department">{department}</span>
          </div>
          <span className="dropdown-arrow">▼</span>
        </div>

        {dropdownOpen && (
          <div className="dropdown">
            <ul>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/settings">Settings</a></li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
