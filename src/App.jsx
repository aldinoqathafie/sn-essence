import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Variants from "./components/Variants";
import MobileLogin from "./components/MobileLogin";

export default function App() {
  const isMobile = window.innerWidth < 768;

  return (
    <>
      {isMobile ? (
        <MobileLogin />
      ) : (
        <div className="relative w-full min-h-screen overflow-visible">
          <Header />
          <Variants /> {/* tetap fixed, tampil di atas */}
          <Hero />
        </div>
      )}
    </>
  );
}
