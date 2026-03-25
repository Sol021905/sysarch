import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from "./pages/RegistrationPage"
import DashboardPage from "./pages/DashboardPage"
import ProfilePage from "./pages/ProfilePage"
import AboutUs from "./pages/AboutUs"
import RequestFormPage from "./pages/RequestFormPage"
import AdminLoginPage from "./pages/AdminLoginPage"
import AdminDashboardPage from "./pages/AdminDashboardPage"
import HelpButton from "./components/HelpButton"

function App() {
  return (
    <BrowserRouter>
      <Navbar />   
      <HelpButton />
      
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mission" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/request" element={<RequestFormPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



