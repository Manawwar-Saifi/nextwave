import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../assets/hero.png";

const CTABanners = () => (
  <section
    className="bg-white py-16 px-5 md:px-10"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-5">

      {/* ── Left — Large card ── */}
      <div
        data-aos="fade-right"
        className="md:col-span-3 bg-black relative overflow-hidden flex flex-col justify-end"
        style={{ minHeight: "420px" }}
      >
        {/* bg image */}
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
        />
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* gradient fade at bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent pointer-events-none" />

        <div className="relative z-10 p-8 md:p-10">
          <p
            className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Range
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Explore Product<br />Collection
          </h2>
          <p className="text-gray-400 text-sm mb-7 max-w-sm leading-relaxed">
            Discover OEM &amp; ODM tech solutions designed to support and scale
            your brand with reliable mobile accessories.
          </p>
          <NavLink
            to="/categories/neckband"
            className="inline-block bg-white text-black text-xs font-bold tracking-widest uppercase px-7 py-3 hover:bg-gray-100 active:scale-95 transition-all duration-200"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
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
          className="bg-gray-50 border border-gray-100 flex-1 flex items-center justify-between gap-4 overflow-hidden px-7 py-8"
          style={{ minHeight: "190px" }}
        >
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
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
              className="inline-block bg-black text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 hover:bg-gray-800 active:scale-95 transition-all duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              CONTACT US →
            </NavLink>
          </div>
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="w-24 h-24 md:w-28 md:h-28 object-contain opacity-75 shrink-0 pointer-events-none select-none"
          />
        </div>

        {/* Card B — About */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="bg-black flex-1 flex items-center justify-between gap-4 overflow-hidden px-7 py-8"
          style={{ minHeight: "190px" }}
        >
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            className="w-24 h-24 md:w-28 md:h-28 object-contain opacity-50 shrink-0 pointer-events-none select-none"
          />
          <div className="text-right">
            <p
              className="text-xs tracking-[0.2em] uppercase text-gray-600 mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Your Trusted Partner
            </p>
            <h3
              className="text-xl font-bold text-white mb-5 leading-snug"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              See why brands<br />choose us
            </h3>
            <NavLink
              to="/about"
              className="inline-block bg-white text-black text-xs font-bold tracking-widest uppercase px-5 py-2.5 hover:bg-gray-100 active:scale-95 transition-all duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
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
