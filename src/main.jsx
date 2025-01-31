import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Profile from './Profile.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Password from './password'
import VehicleRegistration from './VehicleRegistration.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vehicle-registration" element={<VehicleRegistration />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
