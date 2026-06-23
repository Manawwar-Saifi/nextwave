import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const KEYWORDS = [
  "EARBUDS",
  "CABLES",
  "CHARGERS",
  "NECKBANDS",
  "SPEAKERS",
  "MICROPHONES",
];

const TRACK_TEXT = [...KEYWORDS, ...KEYWORDS].map((k) => `${k}  •  `).join("");

const MarqueeBanner = () => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -halfWidth,
      duration: 22,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <section
      className="bg-black py-4 overflow-hidden border-t border-b border-gray-800"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        ref={trackRef}
        className="marquee-track whitespace-nowrap text-white text-xs font-semibold tracking-[0.25em]"
        style={{ display: "inline-block" }}
      >
        {TRACK_TEXT}
      </div>
    </section>
  );
};

export default MarqueeBanner;
