import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MobileLogin from "./components/MobileLogin";
import PCLogin from "./components/PCLogin";
import Login from "./components/Login"; // jembatan otomatis
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Halaman awal langsung login otomatis */}
        <Route path="/" element={<Login />} />

        {/* Manual akses login juga pakai deteksi otomatis */}
        <Route path="/login" element={<Login />} />

        {/* Login khusus untuk perangkat */}
        <Route path="/MobileLogin" element={<MobileLogin />} />
        <Route path="/PCLogin" element={<PCLogin />} />

        {/* Dashboard admin */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Dashboard user */}
        <Route path="/user" element={<UserDashboard />} />

        {/* Redirect fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
