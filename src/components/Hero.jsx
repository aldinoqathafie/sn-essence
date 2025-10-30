import React from "react";
import background from "../assets/background.jpg";
import paketJuara from "../assets/paket_juara.png";

export default function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex justify-between px-20 overflow-hidden pt-8"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Text Section */}
      <div className="flex flex-col text-white w-2/2 select-none mt-4">
        <div className="text-center mb-12">
          <h1 className="text-[8rem] font-extrabold leading-none drop-shadow-lg">
            SN ESSENCE
          </h1>
          <div className="bg-[#2b1d16]/90 inline-block px-8 py-2 mt-4 rounded-sm">
            <p className="text-yellow-500 text-5xl tracking-[0.35em] font-semibold">
              PREMIUM
            </p>
          </div>
        </div>

        <div className="text-left pl-5 mt-4">
          <h2 className="text-4xl font-semibold mb-4 leading-tight">
            Solusi Memancing Maksimal
          </h2>
          <p className="text-xl leading-snug text-gray-200 max-w-3xl">
            Nikmati kualitas essence terbaik dari SN Essence Premium,
            pilihan para pemancing profesional di seluruh Indonesia.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center items-center h-full">
        <img
          src={paketJuara}
          alt="Paket Juara"
          className="relative z-10 w-[580px] drop-shadow-2xl select-none"
        />
      </div>
    </section>
  );
}
