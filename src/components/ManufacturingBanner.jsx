import React from "react";
import { NavLink } from "react-router-dom";

// Swap this import for a real manufacturing / factory photo when available
// import manufacturingBg from "../assets/manufacturing.jpg";

const stats = [
  { value: "3+",   label: "Years in Market",      sub: "Trusted since 2021" },
  { value: "500+", label: "Products",              sub: "Across all categories" },
  { value: "200+", label: "Business Partners",     sub: "Retailers & brands" },
  { value: "15+",  label: "Product Categories",    sub: "OEM & ODM ready" },
];

const ManufacturingBanner = () => (
  <section style={{ fontFamily: "'Poppins', sans-serif" }}>

    {/* ── Full-bleed banner ─────────────────────────────────────────────── */}
    <div
      className="relative overflow-hidden bg-black"
      style={{
        minHeight: "460px",
        // backgroundImage: `url(${manufacturingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark tint — becomes the overlay when a real bg image is set above */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Decorative right-side accent line */}
      <div className="absolute top-0 right-0 bottom-0 w-px bg-white/5" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <p
          className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          data-aos="fade-up"
        >
          Why Partner With Us
        </p>

        <h2
          className="text-3xl md:text-5xl font-black text-white leading-tight mb-6"
          style={{ fontFamily: "'Lato', sans-serif", maxWidth: "700px" }}
          data-aos="fade-up"
          data-aos-delay="80"
        >
          India's Premier Mobile<br />Accessories B2B Partner
        </h2>

        <p
          className="text-gray-400 text-sm leading-relaxed mb-10"
          style={{ maxWidth: "520px" }}
          data-aos="fade-up"
          data-aos-delay="160"
        >
          We supply retailers, distributors, and private labels with certified,
          high-performance mobile accessories at competitive prices — complete
          OEM &amp; ODM capabilities included.
        </p>

        <NavLink
          to="/about"
          className="inline-block bg-white text-black text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-gray-200 active:scale-95 transition-all duration-200"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          data-aos="fade-up"
          data-aos-delay="240"
        >
          Discover More
        </NavLink>
      </div>
    </div>

    {/* ── Stats strip ───────────────────────────────────────────────────── */}
    <div className="bg-black border-t border-white/10">
      <div
        className="max-w-6xl mx-auto px-5 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {stats.map(({ value, label, sub }, i) => (
          <div
            key={label}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className={[
              "flex flex-col items-center text-center py-6 px-4",
              i % 2 === 0 && i !== stats.length - 1 ? "border-r border-white/10 md:border-r-0" : "",
              i < stats.length - 1 ? "md:border-r md:border-white/10" : "",
              i < 2 ? "border-b border-white/10 md:border-b-0" : "",
            ].join(" ")}
          >
            <p className="text-4xl md:text-5xl font-black text-white mb-1 leading-none">
              {value}
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-1.5">
              {label}
            </p>
            <p className="text-xs text-gray-500">{sub}</p>
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default ManufacturingBanner;
