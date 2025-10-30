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

  const prev = () => setIndex((i) => (i - 1 + variants.length) % variants.length);
  const next = () => setIndex((i) => (i + 1) % variants.length);

  const handleStart = (clientX) => {
    setIsDragging(true);
    startX.current = clientX;
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    const delta = clientX - startX.current;
    const limited = Math.max(Math.min(delta, 200), -200);
    setDragX(limited);
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (dragX > 100) next(); // ← dibalik
    else if (dragX < -100) prev(); // ← dibalik
    setDragX(0);
  };

  const visible = [
    variants[(index - 1 + variants.length) % variants.length],
    variants[index],
    variants[(index + 1) % variants.length],
  ];

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-40 z-[9999] select-none">
      <div className="flex flex-col items-center perspective-[1200px]">
        <h1 className="mb-3 text-[1.5rem] font-extrabold text-white/50 tracking-widest select-none">
          ALL VARIANTS
        </h1>

        <div className="relative flex items-center justify-center w-[560px] h-[220px] overflow-visible">
          {/* Tombol kiri */}
          <button
            onClick={next} // ← dibalik
            className="absolute left-0 text-white text-4xl px-3 py-1 hover:text-yellow-400 transition z-20"
          >
            ❮
          </button>

          {/* Area gambar */}
          <div
            className="relative w-full flex justify-center items-center transition-transform duration-300"
            style={{
              transform: `translateX(${dragX * 0.3}px)`,
              perspective: "1200px",
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
              className="absolute transition-all duration-500 ease-out"
              style={{
                width: "140px",
                transform: `translateX(-180px) rotateY(35deg) scale(0.8)`,
                opacity: 0.6,
                zIndex: 1,
              }}
              draggable={false}
            />

            {/* Tengah */}
            <img
              src={visible[1]}
              alt="current"
              className="absolute transition-all duration-500 ease-out drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
              style={{
                width: "200px",
                transform: `translateX(${dragX / 5}px) rotateY(${dragX / 30}deg) scale(1)`,
                opacity: 1,
                zIndex: 3,
              }}
              draggable={false}
            />

            {/* Kanan */}
            <img
              src={visible[2]}
              alt="next"
              className="absolute transition-all duration-500 ease-out"
              style={{
                width: "140px",
                transform: `translateX(180px) rotateY(-35deg) scale(0.8)`,
                opacity: 0.6,
                zIndex: 1,
              }}
              draggable={false}
            />
          </div>

          {/* Tombol kanan */}
          <button
            onClick={prev} // ← dibalik
            className="absolute right-0 text-white text-4xl px-3 py-1 hover:text-yellow-400 transition z-20"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
