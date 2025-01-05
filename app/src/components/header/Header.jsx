import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="logo.png" alt="Tyremaster Logo" className="logo" />
      </div>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li>
            <a href="/operations">Operations</a>
            <ul className="dropdown">
              <li><a href="/operations/customer-inquiry">Customer Inquiry</a></li>
              <li><a href="/operations/assessment-form">Assessment Form</a></li>
              <li><a href="/operations/af-history">AF History</a></li>
            </ul>
          </li>
          <li>
            <a href="/cashier">Cashier</a>
            <ul className="dropdown">
              <li><a href="/cashier/customer-inquiry">Customer Inquiry</a></li>
              <li><a href="/cashier/assessment-form">Assessment Form</a></li>
              <li><a href="/cashier/af-history">AF History</a></li>
              <li><a href="/cashier/job-order-history">Job Order History</a></li>
            </ul>
          </li>
          <li>
            <a href="/billing-collection">Billing & Collection</a>
            <ul className="dropdown">
              <li><a href="/billing/fleet-billing">Fleet Billing</a></li>
              <li className="dropdown-divider"></li>
              <li><a href="/billing/billing-list">Billing List</a></li>
              <li><a href="/billing/fleet-billing-pending">Fleet Billing Pending</a></li>
              <li className="dropdown-divider"></li>
              <li><a href="/billing/fleet-jo-list-all">Fleet JO List All</a></li>
              <li><a href="/billing/accounts-receivable">Account Receivable</a></li>
            </ul>
          </li>
          <li><a href="/reports">Reports</a></li>
        </ul>
      </nav>
      <div className="profile-container">
        <img src="/path-to-profile/profile-icon.png" alt="Profile" className="profile-icon" />
        <div className="profile-details">
          <span>Admin1234</span>
          <br />
          <span>Accounting Department</span>
        </div>
        <div className="dropdown-arrow">&#9662;</div>
      </div>
    </header>
  );
};

export default Header;
