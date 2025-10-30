import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-amber-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">SN Essence</h1>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-amber-300">Home</a></li>
        <li><a href="#" className="hover:text-amber-300">Produk</a></li>
        <li><a href="#" className="hover:text-amber-300">Tentang</a></li>
        <li><a href="#" className="hover:text-amber-300">Kontak</a></li>
        <li><a href="#" className="hover:text-amber-300">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
