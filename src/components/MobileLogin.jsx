import React from "react";
import bg from "../assets/backgroundhp.jpg";
import Variants from "./Variants";

export default function MobileLogin() {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen w-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* === Variants (bebas atur posisi) === */}
      <div
        className="absolute z-[50] flex justify-center items-center"
        style={{
          top: "350px", // ubah jarak dari atas
          left: "50%",
          transform: "translateX(-50%) scale(0.6)", // ubah scale sesuai kebutuhan
        }}
      >
        <Variants />
      </div>

      {/* === Teks utama === */}
      <div className="text-center mb-10 select-none relative z-[2] mt-48">
        <h1 className="text-white text-6xl font-extrabold tracking-tight leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          SN Essence
        </h1>
        <h2 className="text-yellow-400 text-3xl font-bold mt-3 tracking-widest drop-shadow-[0_0_10px_rgba(255,255,100,0.3)]">
          PREMIUM
        </h2>
        <p className="text-white text-lg font-medium mt-3 opacity-90 tracking-wide">
          Solusi Memancing Maksimal
        </p>
      </div>

      {/* === Form login === */}
      <div className="w-3/4 max-w-sm p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg relative z-[2] -mt-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none"
        />
        <button className="w-full p-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-lg transition">
          LOGIN
        </button>
      </div>
    </div>
  );
}
