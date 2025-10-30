import React from "react";
import background from "../assets/backgroundhp.jpg";

const MobileLogin = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Glass Login Box */}
      <div className="absolute bottom-20 w-[80%] max-w-sm backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center">
        {/* Icon User */}
        <div className="text-white text-4xl mb-4">
          <i className="fa-regular fa-user"></i>
        </div>

        {/* Username */}
        <input
          type="text"
          placeholder="user name"
          className="w-full mb-3 px-4 py-2 bg-transparent border border-white/40 rounded-md text-white placeholder-white/60 focus:outline-none"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="password"
          className="w-full mb-4 px-4 py-2 bg-transparent border border-white/40 rounded-md text-white placeholder-white/60 focus:outline-none"
        />

        {/* Button */}
        <button className="w-full py-2 bg-white/20 border border-white/30 rounded-md text-white font-semibold tracking-wider hover:bg-white/30 transition">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default MobileLogin;
