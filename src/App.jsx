import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Variants from "./components/Variants";

export default function App() {
  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Variants /> {/* <-- pindah ke atas Hero */}
      <Hero />
    </div>
  );
}
