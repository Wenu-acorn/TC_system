import React, { useState } from "react";
import "./Home.css"; // Changed from App.css to Home.css
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  // You can get the username from localStorage if you stored it during login
  const username = localStorage.getItem('username') || 'User';
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // State to manage dropdown visibility
  const [isSupplierSubmenuOpen, setIsSupplierSubmenuOpen] = useState(false); // State for the Supplier Payment dropdown

  const handleLogout = () => {
    // Clear any stored user data
    localStorage.removeItem('username');
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to profile page
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen); // Toggle the dropdown menu
  };

  const toggleSupplierSubmenu = () => {
    setIsSupplierSubmenuOpen(!isSupplierSubmenuOpen); // Toggle the dropdown menu
  };

  return (
    <div className="app-container">
      {/* User Account Section with clickable profile */}
      <div className="user-account">
        <div className="user-profile">
          <div 
            className="profile-circle" 
            onClick={handleProfileClick}
            title="View Profile"
          >
            <img 
              src="/login.png"  // Updated to use public folder path
              alt="User Profile" 
              className="user-image"
            />
          </div>
          <div className="user-info">
            <span className="welcome-text">Welcome</span>
            <span className="user-name">{username}</span>
          </div>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Data Entering & Reports</h2>
        
        {/* Vehicle Registration Button */}
        <div className="menu-group">
          <button className="report-button" onClick={() => navigate('/vehicle-registration')}>
            Enter Vehicle Registration
          </button>
        </div>
        
        {/* Log Sheet Summaries Section with Dropdown */}
        <div className="menu-group">
          <button className="report-button" onClick={toggleSubmenu}>
            Log Sheet Summaries 
            <span className="dropdown-icon">{isSubmenuOpen ? '▲' : '▼'}</span>
          </button>
          {isSubmenuOpen && ( // Conditional rendering for the dropdown
            <div className="submenu">
              <button className="submenu-button">Today</button>
              <button className="submenu-button">Between Dates</button>
              <button className="submenu-button">Log Sheet Details</button>
            </div>
          )}
        </div>
        <div className="menu-group">
          <button className="report-button">Cash Collection Summary</button>
        </div>
        <div className="menu-group">
          <button className="report-button" onClick={toggleSupplierSubmenu}>
            Supplier Payment Summary
            <span className="dropdown-icon">{isSupplierSubmenuOpen ? '▲' : '▼'}</span>
          </button>
          {isSupplierSubmenuOpen && (
            <div className="submenu">
              <button className="submenu-button">For Specific Vehicle</button>
              <button className="submenu-button">For All Vehicles</button>
            </div>
          )}
        </div>

        {/* Log Sheet Invoice Print Section */}
        <div className="menu-group">
          <button className="report-button">Log Sheet Invoice Print</button>
        </div>

        {/* Cash Collection Invoice Print Section */}
        <div className="menu-group">
          <button className="report-button">Cash Collection Invoice Print</button>
        </div>

        {/* Sales Summary - Customerwise Section */}
        <div className="menu-group">
          <button className="report-button">Sales Summary - Customerwise</button>
        </div>
      </div>

      {/* Main Background with Centered Heading */}
      <div className="background">
        <h1 className="center-heading">Travel Counter Management System</h1>
      </div>
    </div>
  );
}

export default Home;
