import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Jalankan fungsi login dari AuthContext
    login(username, password);

    // Tunggu sedikit agar state AuthContext sempat ter-update
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        navigate("/admin");
      } else if (username === "user" && password === "1234") {
        navigate("/user");
      } else {
        alert("Username atau password salah!");
      }
    }, 200);
  };

  return (
    <header className="absolute top-0 right-0 w-full flex justify-end p-6 z-20">
      <div className="flex items-center space-x-3 bg-[#2b1d16]/70 px-6 py-3 rounded-lg backdrop-blur-md">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-1 rounded-md bg-transparent border border-yellow-500 text-white placeholder-gray-300 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-1 rounded-md bg-transparent border border-yellow-500 text-white placeholder-gray-300 focus:outline-none"
        />
        <button
          onClick={handleLogin}
          className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-md hover:bg-yellow-400"
        >
          Login
        </button>
      </div>
    </header>
  );
}
