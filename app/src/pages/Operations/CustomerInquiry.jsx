import React, { useState } from "react";
import "./CustomerInquiry.css"; // Optional: Add a CSS file for styling

const CustomerInquiry = () => {
  const [inquiries, setInquiries] = useState([]);
  const [newInquiry, setNewInquiry] = useState("");

  const handleAddInquiry = () => {
    if (newInquiry.trim()) {
      setInquiries([...inquiries, newInquiry]);
      setNewInquiry("");
    }
  };

  return (
    <div className="customer-inquiry-container">
      <h1>Customer Inquiry</h1>
      <div className="inquiry-form">
        <input
          type="text"
          value={newInquiry}
          onChange={(e) => setNewInquiry(e.target.value)}
          placeholder="Enter your inquiry"
          className="inquiry-input"
        />
        <button onClick={handleAddInquiry} className="add-inquiry-btn">
          Add Inquiry
        </button>
      </div>
      <div className="inquiries-list">
        <h2>Inquiries</h2>
        {inquiries.length > 0 ? (
          <ul>
            {inquiries.map((inquiry, index) => (
              <li key={index} className="inquiry-item">
                {inquiry}
              </li>
            ))}
          </ul>
        ) : (
          <p>No inquiries yet.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerInquiry;
