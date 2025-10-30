import React from "react";

export default function Header() {
  return (
    <header className="absolute top-0 right-0 w-full flex justify-end p-6 z-20">
      <div className="flex items-center space-x-3 bg-[#2b1d16]/70 px-6 py-3 rounded-lg backdrop-blur-md">
        <input
          type="text"
          placeholder="Username"
          className="px-3 py-1 rounded-md bg-transparent border border-yellow-500 text-white placeholder-gray-300 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-3 py-1 rounded-md bg-transparent border border-yellow-500 text-white placeholder-gray-300 focus:outline-none"
        />
        <button className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-md hover:bg-yellow-400">
          Login
        </button>
      </div>
    </header>
  );
}
