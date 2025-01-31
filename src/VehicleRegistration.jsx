import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VehicleRegistration.css';

function VehicleRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    vehicleType: '',
    ownerName: '',
    contactNumber: '',
    address: '',
    seatingCapacity: '',
    registrationDate: '',
    insuranceNumber: '',
    insuranceExpiry: '',
    permitNumber: '',
    permitExpiry: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Vehicle Registration Successful!');
    navigate('/home');
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="registration-header">
          <button className="back-button" onClick={handleBack}>
            ←
          </button>
          <h2>Vehicle Registration</h2>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-grid">
            {/* Vehicle Details */}
            <div className="form-group">
              <label>Vehicle Number:</label>
              <input
                type="text"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                required
                placeholder="Enter vehicle number"
              />
            </div>

            <div className="form-group">
              <label>Vehicle Type:</label>
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required
              >
                <option value="">Select vehicle type</option>
                <option value="bus">Bus</option>
                <option value="van">Van</option>
                <option value="car">Car</option>
              </select>
            </div>

            {/* Owner Details */}
            <div className="form-group">
              <label>Owner Name:</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
                placeholder="Enter owner name"
              />
            </div>

            <div className="form-group">
              <label>Contact Number:</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                placeholder="Enter contact number"
              />
            </div>

            <div className="form-group full-width">
              <label>Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter address"
              />
            </div>

            <div className="form-group">
              <label>Seating Capacity:</label>
              <input
                type="number"
                name="seatingCapacity"
                value={formData.seatingCapacity}
                onChange={handleChange}
                required
                placeholder="Enter seating capacity"
              />
            </div>

            <div className="form-group">
              <label>Registration Date:</label>
              <input
                type="date"
                name="registrationDate"
                value={formData.registrationDate}
                onChange={handleChange}
                required
              />
            </div>

            {/* Insurance Details */}
            <div className="form-group">
              <label>Insurance Number:</label>
              <input
                type="text"
                name="insuranceNumber"
                value={formData.insuranceNumber}
                onChange={handleChange}
                required
                placeholder="Enter insurance number"
              />
            </div>

            <div className="form-group">
              <label>Insurance Expiry:</label>
              <input
                type="date"
                name="insuranceExpiry"
                value={formData.insuranceExpiry}
                onChange={handleChange}
                required
              />
            </div>

            {/* Permit Details */}
            <div className="form-group">
              <label>Permit Number:</label>
              <input
                type="text"
                name="permitNumber"
                value={formData.permitNumber}
                onChange={handleChange}
                required
                placeholder="Enter permit number"
              />
            </div>

            <div className="form-group">
              <label>Permit Expiry:</label>
              <input
                type="date"
                name="permitExpiry"
                value={formData.permitExpiry}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={handleBack}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Register Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VehicleRegistration; 