// src/components/MobileLogin.jsx
import React from "react";
import background from "../assets/background.jpg";

export default function MobileLogin() {
  return (
    <div
      className="relative flex flex-col justify-center items-center h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay gelap biar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten Utama */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl font-bold tracking-wider">SN Essence</h1>
        <h2 className="text-xl font-semibold mt-1 bg-amber-700 inline-block px-3 py-1 rounded">
          PREMIUM
        </h2>

        <p className="text-sm mt-4 leading-snug">
          Solusi Memancing Maksimal
          <br />
          Nikmati kualitas essence terbaik dari SN Essence Premium,
          <br />
          pilihan para pemancing profesional di seluruh Indonesia.
        </p>

        {/* Form Login */}
        <div className="mt-8 w-full max-w-xs mx-auto bg-white/10 p-6 rounded-2xl backdrop-blur-md">
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none"
            />
          </div>
          <button className="mt-5 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md font-semibold transition">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
