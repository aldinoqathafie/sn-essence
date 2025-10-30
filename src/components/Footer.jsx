import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-200 py-8 text-center">
      <p>© {new Date().getFullYear()} SN Essence — Semua Hak Dilindungi</p>
      <p className="text-sm mt-2">Hubungi kami: snessence@gmail.com</p>
    </footer>
  );
};

export default Footer;
