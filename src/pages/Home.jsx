import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Variants from "../components/Variants";
import MobileLogin from "../components/MobileLogin";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileLogin />;
  }

  return (
    <main className="relative overflow-visible">
      <Hero />
      <Variants />
    </main>
  );
};

export default Home;
