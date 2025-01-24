import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'User';
  const [isEditing, setIsEditing] = useState(false);

  const [userDetails, setUserDetails] = useState({
    fullName: 'Travel Admin',
    username: username,
    email: 'admin@travelcounter.com',
    position: 'Counter Manager',
    department: 'Travel Management',
    employeeId: 'EMP001',
    joinDate: '2024-01-01',
    contactNo: '+94 XX XXX XXXX',
  });

  const [profileImage, setProfileImage] = useState('/login.png');

  const handleBack = () => {
    navigate('/home');
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h2>Staff Profile</h2>
          {!isEditing && (
            <button className="edit-button" onClick={handleEdit}>
              Edit Profile
            </button>
          )}
        </div>

        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
          {isEditing && (
            <>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              <button className="change-photo-btn">Change Photo</button>
            </>
          )}
        </div>

        <div className="profile-details">
          <div className="detail-group">
            <h3>Personal Information</h3>
            <div className="detail-item">
              <label>Full Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={userDetails.fullName}
                  onChange={handleChange}
                />
              ) : (
                <span>{userDetails.fullName}</span>
              )}
            </div>
            <div className="detail-item">
              <label>Username:</label>
              <span>{userDetails.username}</span>
            </div>
            <div className="detail-item">
              <label>Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                />
              ) : (
                <span>{userDetails.email}</span>
              )}
            </div>
            <div className="detail-item">
              <label>Contact No:</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="contactNo"
                  value={userDetails.contactNo}
                  onChange={handleChange}
                />
              ) : (
                <span>{userDetails.contactNo}</span>
              )}
            </div>
          </div>

          <div className="detail-group">
            <h3>Employment Details</h3>
            <div className="detail-item">
              <label>Position:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="position"
                  value={userDetails.position}
                  onChange={handleChange}
                />
              ) : (
                <span>{userDetails.position}</span>
              )}
            </div>
            <div className="detail-item">
              <label>Department:</label>
              <span>{userDetails.department}</span>
            </div>
            <div className="detail-item">
              <label>Employee ID:</label>
              <span>{userDetails.employeeId}</span>
            </div>
            <div className="detail-item">
              <label>Join Date:</label>
              <span>{new Date(userDetails.joinDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="profile-actions">
            <button className="cancel-button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
            <button className="save-button" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        )}

        <div className="back-button-container">
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
