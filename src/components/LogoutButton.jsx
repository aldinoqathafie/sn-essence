import React from "react";
import { useAuth } from "../context/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg font-semibold transition"
    >
      Logout
    </button>
  );
}
