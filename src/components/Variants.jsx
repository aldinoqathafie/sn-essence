import React, { useState, useRef } from "react";
import variant1 from "../assets/variant_1.png";
import variant2 from "../assets/variant_2.png";
import variant3 from "../assets/variant_3.png";
import variant4 from "../assets/variant_4.png";
import variant5 from "../assets/variant_5.png";

export default function Variants() {
  const variants = [variant1, variant2, variant3, variant4, variant5];
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);

  const prev = () =>
    setIndex((i) => (i - 1 + variants.length) % variants.length);
  const next = () => setIndex((i) => (i + 1) % variants.length);

  const handleStart = (clientX) => {
    setIsDragging(true);
    startX.current = clientX;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const delta = clientX - startX.current;
    const limited = Math.max(Math.min(delta, 150), -150);
    setDragX(limited);
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (dragX > 80) prev();
    else if (dragX < -80) next();
    setDragX(0);
  };

  const visible = [
    variants[(index - 1 + variants.length) % variants.length],
    variants[index],
    variants[(index + 1) % variants.length],
  ];

  return (
    <div className="fixed left-[24%] -translate-x-1/2 bottom-40 z-[9999] select-none">
      <div className="flex flex-col items-center">
        <h1 className="mb-3 text-[2.5rem] font-extrabold text-white/10 tracking-widest select-none">
          ALL VARIANTS
        </h1>

        <div className="flex items-center gap-4 overflow-hidden w-[560px] justify-center relative">
          {/* Tombol kiri */}
          <button
            onClick={prev}
            className="text-white text-4xl px-3 py-1 hover:text-yellow-400 transition z-10"
          >
            ❮
          </button>

          {/* Area gambar */}
          <div
            className={`flex items-center gap-8 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              transform: `translateX(${dragX}px)`,
              transition: isDragging ? "none" : "transform 0.3s ease-in-out",
            }}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
          >
            {/* Kiri */}
            <img
              src={visible[0]}
              alt="prev"
              className="w-[120px] opacity-50 blur-[1px] transition-all duration-300"
              style={{
                transform: `scale(${1 - Math.abs(dragX + 150) / 800})`,
              }}
              draggable={false}
            />

            {/* Tengah */}
            <img
              src={visible[1]}
              alt="current"
              className="w-[190px] transition-all duration-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
              style={{
                transform: `scale(${1 - Math.abs(dragX) / 600})`,
                filter: `brightness(${1 - Math.abs(dragX) / 800})`,
              }}
              draggable={false}
            />

            {/* Kanan */}
            <img
              src={visible[2]}
              alt="next"
              className="w-[120px] opacity-50 blur-[1px] transition-all duration-300"
              style={{
                transform: `scale(${1 - Math.abs(dragX - 150) / 800})`,
              }}
              draggable={false}
            />
          </div>

          {/* Tombol kanan */}
          <button
            onClick={next}
            className="text-white text-4xl px-3 py-1 hover:text-yellow-400 transition z-10"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
