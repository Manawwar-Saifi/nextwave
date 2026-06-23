import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import vipinLogo from "../assets/vipin-logo.webp";

const Preloader = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const barRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in logo
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    );

    // Fill bar + count 0 → 100
    const progress = { val: 0 };
    tl.to(
      progress,
      {
        val: 100,
        duration: 1.8,
        ease: "power1.inOut",
        onUpdate() {
          const v = Math.round(progress.val);
          setCount(v);
          if (barRef.current) barRef.current.style.width = `${progress.val}%`;
        },
      },
      "-=0.2"
    );

    // Brief pause at 100, then curtain wipe upward
    tl.to({}, { duration: 0.25 }).to(overlayRef.current, {
      yPercent: -100,
      duration: 0.85,
      ease: "power3.inOut",
      onComplete,
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div ref={logoRef} className="flex flex-col items-center gap-8 opacity-0">
        {/* Logo */}
        <img
          src={vipinLogo}
          alt="Next Wave Technology"
          className="h-12 w-auto object-contain brightness-0 invert"
        />

        {/* Progress bar */}
        <div className="w-48 h-px bg-gray-800 relative overflow-hidden">
          <div
            ref={barRef}
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: "0%" }}
          />
        </div>

        {/* Counter */}
        <span className="text-white text-xs font-light tracking-[0.3em] tabular-nums">
          {String(count).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
};

export default Preloader;
