import React, { useState } from "react";
import Header from "../../components/header/Header"; // Adjust path based on structure
import "./AFHistory.css";

const CustomerInquiry = () => {
  const [formData, setFormData] = useState({
    vehicleLicense: "",
    vehicleModel: "",
    fullName: "",
    address: "",
    contact: "",
    inquiryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="customer-inquiry-container">
        <h1>Customer Inquiry</h1>
        <form onSubmit={handleSubmit} className="inquiry-form">
          <div className="form-group">
            <label>Vehicle Detail:</label>
            <div className="vehicle-detail">
              <input
                type="text"
                name="vehicleLicense"
                value={formData.vehicleLicense}
                onChange={handleChange}
                placeholder="License Plate"
                className="inquiry-input small"
              />
              <input
                type="text"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                placeholder="Vehicle Model"
                className="inquiry-input small"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="inquiry-input"
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="inquiry-input"
            />
          </div>
          <div className="form-group">
            <label>Contact Number:</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter Contact Info"
              className="inquiry-input"
            />
          </div>
          <div className="form-group">
            <label>Date Inquire:</label>
            <input
              type="date"
              name="inquiryDate"
              value={formData.inquiryDate}
              onChange={handleChange}
              className="inquiry-input"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AFHistory;
