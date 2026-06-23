import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const NotFound = () => {
  const numRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      numRef.current,
      { opacity: 0, y: 60, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }
    ).fromTo(
      contentRef.current.children,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.12 },
      "-=0.4"
    );
  }, []);

  return (
    <main
      className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* GSAP animated 404 number */}
      <div ref={numRef} className="mb-6 select-none">
        <span
          className="text-[140px] sm:text-[200px] font-black leading-none tracking-tighter text-black"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          404
        </span>
      </div>

      {/* Content block */}
      <div ref={contentRef} className="flex flex-col items-center gap-5">
        <div className="w-12 h-px bg-black" />

        <h1
          className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-black"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Page Not Found
        </h1>

        <p className="text-sm text-gray-500 max-w-md leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Head back to the homepage and explore our range of accessories.
        </p>

        <Link
          to="/"
          className="mt-2 bg-black text-white text-xs font-semibold tracking-widest uppercase px-8 py-3 hover:bg-gray-800 transition-colors duration-200"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
