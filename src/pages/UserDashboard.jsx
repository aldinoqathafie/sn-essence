import React from "react";
import bg from "../assets/background.jpg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center text-white mb-8 select-none drop-shadow-lg">
        <h1 className="text-4xl font-extrabold">User Dashboard</h1>
        <p className="text-lg opacity-80 mt-2">
          Selamat datang di akun Anda! Nikmati pengalaman belanja terbaik dari SN Essence.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-3/4 max-w-sm">
        <button className="w-full p-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition">
          🛒 Lihat Produk
        </button>
        <button className="w-full p-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition">
          🧾 Riwayat Pembelian
        </button>
        <button className="w-full p-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-lg transition">
          ⚙️ Pengaturan Akun
        </button>
        <button
          onClick={handleLogout}
          className="w-full p-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}
