import React from "react";
import { NavLink } from "react-router-dom";

const CTABanners = () => (
  <section
    className="bg-white py-16 px-5 md:px-10"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-5">

      {/* ── Left — Large card ── */}
      <div
        data-aos="fade-right"
        className="md:col-span-3 relative overflow-hidden"
        style={{ background: '#EBF5FC', minHeight: "420px" }}
      >
        {/* subtle grid — dark lines on light bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(to right, #0B1929 1px, transparent 1px), linear-gradient(to bottom, #0B1929 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Left accent bar */}
        <div className="absolute top-0 left-0 bottom-0 w-1 pointer-events-none" style={{ background: 'var(--nw-blue)' }} />

        {/* Soft glow behind product */}
        <div
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            right: "8%", bottom: "-10%",
            width: "300px", height: "300px",
            background: 'var(--nw-blue)',
            opacity: 0.08,
          }}
        />

        {/* Ring accents */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            right: "2%", bottom: "2%",
            width: "240px", height: "240px",
            border: '1px solid rgba(27,160,225,0.18)',
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            right: "9%", bottom: "9%",
            width: "150px", height: "150px",
            border: '1px solid rgba(232,98,43,0.2)',
          }}
        />

        {/* Product image — PNG with transparent background */}
        <img
          src="/neckband/NWNB-8.png"
          alt="Neckband Bluetooth Earphone"
          className="absolute bottom-0 right-0 object-contain pointer-events-none select-none"
          style={{ height: "90%", maxWidth: "52%" }}
        />

        {/* Text content — left side */}
        <div
          className="relative z-10 flex flex-col justify-end p-8 md:p-10"
          style={{ minHeight: "420px", maxWidth: "58%" }}
        >
          <p
            className="text-xs tracking-[0.25em] uppercase mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--nw-blue)' }}
          >
            Our Range
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold mb-3 leading-snug"
            style={{ fontFamily: "'Lato', sans-serif", color: 'var(--nw-navy)' }}
          >
            Explore Product<br />Collection
          </h2>
          <div className="w-8 h-0.5 mb-4" style={{ background: 'var(--nw-orange)' }} />
          <p className="text-gray-600 text-sm mb-7 leading-relaxed">
            Discover OEM &amp; ODM tech solutions designed to support and scale
            your brand with reliable mobile accessories.
          </p>
          <NavLink
            to="/categories/neckband"
            className="inline-block text-white text-xs font-bold tracking-widest uppercase px-7 py-3 hover:opacity-90 active:scale-95 transition-all duration-200"
            style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
          >
            SHOP NOW →
          </NavLink>
        </div>
      </div>

      {/* ── Right — 2 stacked cards ── */}
      <div className="md:col-span-2 flex flex-col gap-5">

        {/* Card A — Contact */}
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className="flex-1 flex items-center justify-between gap-4 overflow-hidden px-7 py-8"
          style={{ background: '#EBF5FC', minHeight: "190px" }}
        >
          <div className="shrink-0">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--nw-blue)' }}
            >
              Contact us today
            </p>
            <h3
              className="text-xl font-bold text-black mb-5 leading-snug"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Your Journey<br />Starts Here
            </h3>
            <NavLink
              to="/contact"
              className="inline-block text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 hover:opacity-90 active:scale-95 transition-all duration-200"
              style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
            >
              CONTACT US →
            </NavLink>
          </div>
          <img
            src="/category/cable.webp"
            alt="USB Cable"
            aria-hidden="true"
            className="w-24 h-24 md:w-28 md:h-28 object-contain shrink-0 pointer-events-none select-none"
          />
        </div>

        {/* Card B — About */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex-1 flex items-center justify-between gap-4 overflow-hidden px-7 py-8"
          style={{ background: '#FEF0E9', minHeight: "190px" }}
        >
          <img
            src="/speakers/NWS-01.png"
            alt="Bluetooth Speaker"
            aria-hidden="true"
            className="w-24 h-24 md:w-28 md:h-28 object-contain shrink-0 pointer-events-none select-none"
            style={{ mixBlendMode: "multiply" }}
          />
          <div className="text-right">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: "'Poppins', sans-serif", color: 'var(--nw-orange)' }}
            >
              Your Trusted Partner
            </p>
            <h3
              className="text-xl font-bold mb-5 leading-snug"
              style={{ fontFamily: "'Lato', sans-serif", color: 'var(--nw-navy)' }}
            >
              See why brands<br />choose us
            </h3>
            <NavLink
              to="/about"
              className="inline-block text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 hover:opacity-90 active:scale-95 transition-all duration-200"
              style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
            >
              ABOUT US →
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default CTABanners;
