import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./AssessmentForm.css";

const AssessmentForm = () => {
  const [formData, setFormData] = useState({
    plateNo: "",
    model: "",
    date: "",
    name: "",
    address: "",
    remarks: "",
    contactNo: "",
    formNo: "",
    odometer: "",
    technician: "",
    items: [{ item: "", description: "", qty: "", total: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...formData.items];
    updatedItems[index][name] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { item: "", description: "", qty: "", total: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="assessment-form-container">
        <h1 className="page-title">Assessment Form</h1>
        <form onSubmit={handleSubmit} className="assessment-form">
          {/* General Information Fields */}
          <div className="form-group">
            <label>Plate No.:</label>
            <input
              type="text"
              name="plateNo"
              value={formData.plateNo}
              onChange={handleChange}
              placeholder="Enter Plate No."
              className="inquiry-input small"
            />
            <label>Model:</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="Enter Model"
              className="inquiry-input small"
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="inquiry-input"
            />
            <label>Form No.:</label>
            <input
              type="text"
              name="formNo"
              value={formData.formNo}
              onChange={handleChange}
              placeholder="Enter Form No."
              className="inquiry-input"
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="inquiry-input"
            />
            <label>Odometer:</label>
            <input
              type="text"
              name="odometer"
              value={formData.odometer}
              onChange={handleChange}
              placeholder="Enter Odometer"
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
            <label>Technician:</label>
            <input
              type="text"
              name="technician"
              value={formData.technician}
              onChange={handleChange}
              placeholder="Enter Technician"
              className="inquiry-input"
            />
          </div>
          <div className="form-group">
            <label>Remarks:</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Enter Remarks"
              className="inquiry-input"
            ></textarea>
            <label>Contact No.:</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="Enter Contact No."
              className="inquiry-input"
            />
          </div>

          {/* Items Table */}
          <div className="items-section">
            <h2>Items</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {formData.items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        name="item"
                        value={item.item}
                        onChange={(e) => handleItemChange(index, e)}
                        placeholder="Enter Item"
                        className="inquiry-input small"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="description"
                        value={item.description}
                        onChange={(e) => handleItemChange(index, e)}
                        placeholder="Enter Description"
                        className="inquiry-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="qty"
                        value={item.qty}
                        onChange={(e) => handleItemChange(index, e)}
                        placeholder="Qty"
                        className="inquiry-input small"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="total"
                        value={item.total}
                        onChange={(e) => handleItemChange(index, e)}
                        placeholder="Total"
                        className="inquiry-input small"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button type="button" onClick={addItem} className="add-item-btn">
              Add Item
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AssessmentForm;
