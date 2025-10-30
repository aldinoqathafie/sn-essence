import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import bg from "../assets/background.jpg";
import LoginForm from "./LoginForm";
import Variants from "./Variants"; // import Variants.jsx

export default function MobileLogin() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    login(email, password);
  };

  useEffect(() => {
    if (user?.role === "admin") navigate("/admin", { replace: true });
    else if (user?.role === "user") navigate("/user", { replace: true });
  }, [user, navigate]);

  return (
    <div
      className="relative flex flex-col items-center min-h-screen px-4 py-6 text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header / Branding */}
      <div className="absolute top-2 w-full text-center select-none">
        <h1 className="text-[1.8rem] sm:text-[2.5rem] font-extrabold leading-none drop-shadow-lg">
          SN ESSENCE
        </h1>
        <div className="bg-[#2b1d16]/90 inline-block px-3 py-0.5 mt-1 rounded-sm">
          <p className="text-yellow-500 text-lg sm:text-xl tracking-[0.25em] font-semibold">
            PREMIUM
          </p>
        </div>
        <div className="mt-1 px-2">
          <h2 className="text-base sm:text-lg font-semibold leading-tight">
            Solusi Memancing Maksimal
          </h2>
          <p className="text-xs sm:text-sm leading-snug text-gray-200">
            Nikmati kualitas essence terbaik dari SN Essence Premium, pilihan para
            pemancing profesional di seluruh Indonesia.
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="mt-auto mb-6 transform scale-50 -translate-y-40 w-full max-w-sm flex justify-center items-center">
        <LoginForm onSubmit={handleLogin} />
      </div>

      {/* Variants di bagian paling bawah, menggunakan absolute positioning */}
      <div className="absolute bottom-24 w-30 max-w-md px-2 sm:px-4 pb-4 flex justify-center">
        <Variants />
      </div>
    </div>
  );
}
