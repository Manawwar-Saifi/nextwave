import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import heroImg from "../assets/hero.png";

const slides = [
  {
    image: heroImg,
    tag: "#1 India's Most Trusted OEM ODM Mobile Accessories",
    heading: ["Manufacturing", "Partner"],
    description:
      "Experience powerful sound with our premium Bluetooth speakers — crafted for clarity, deep bass, long battery life, and wireless convenience anywhere.",
  },
  {
    image: heroImg,
    tag: "#1 India's Most Trusted OEM ODM Mobile Accessories",
    heading: ["Your Trusted", "Supplier"],
    description:
      "Enjoy true wireless freedom with TWS earbuds — featuring rich sound, noise isolation, touch controls, long battery, and stylish compact design.",
  },
  {
    image: heroImg,
    tag: "#1 India's Most Trusted OEM ODM Mobile Accessories",
    heading: ["White Label", "Solutions"],
    description:
      "We manufacture high-quality mobile accessories with precision engineering, advanced technology, reliable performance, and trusted support for global OEM and ODM needs.",
  },
];

/* ── Trusted Badge ── */
const TrustedBadge = () => (
  <div
    className="absolute top-6 right-6 z-30 w-16 h-16 md:w-20 md:h-20"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
      <polygon
        points="50,6 53,18 65,18 56,26 59,38 50,31 41,38 44,26 35,18 47,18"
        fill="white" opacity="0.9"
      />
      <path id="heroTopArc" d="M 15,50 A 35,35 0 0,1 85,50" fill="none" />
      <path id="heroBotArc" d="M 20,56 A 32,32 0 0,0 80,56" fill="none" />
      <text fontSize="9" fill="white" fontWeight="700" letterSpacing="2" textAnchor="middle">
        <textPath href="#heroTopArc" startOffset="50%">INDIA'S MOST</textPath>
      </text>
      <text x="50" y="58" fontSize="13" fill="white" fontWeight="900" textAnchor="middle" letterSpacing="1">
        TRUSTED
      </text>
      <text fontSize="7.5" fill="white" fontWeight="600" letterSpacing="1.5" textAnchor="middle">
        <textPath href="#heroBotArc" startOffset="50%">PARTNER</textPath>
      </text>
    </svg>
  </div>
);

/* ── Grid background ── */
const GridBg = () => (
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />
);

/* ── Hero Swiper ── */
const HeroSwiper = () => (
  <section className="w-full bg-black overflow-hidden relative h-81.25 md:h-105">
    <GridBg />
    <TrustedBadge />

    <Swiper
      modules={[Autoplay]}
      // autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      speed={700}
      style={{ width: "100%", height: "100%" }}
      className="hero-swiper"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} style={{ height: "100%" }}>
          {/* Centered container */}
          <div className="w-full h-full flex items-center">
            <div
              className="w-full h-full flex flex-col md:flex-row items-center"
              style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 96px)" }}
            >
              {/* Left — Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-white pt-14 md:pt-0">
                <p
                  className="font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px" }}
                >
                  {slide.tag}
                </p>
                <h1
                  className="leading-tight mb-4"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(28px, 3.5vw, 44.8px)",
                  }}
                >
                  {slide.heading.map((line, j) => (
                    <span key={j} className="block">{line}</span>
                  ))}
                </h1>
                <p
                  className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif", maxWidth: "440px" }}
                >
                  {slide.description}
                </p>
                <div>
                  <button
                    className="bg-white text-black text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    View Shop
                  </button>
                </div>
              </div>

              {/* Right — Image */}
              <div className="hidden md:flex w-1/2 relative items-center justify-center">
                <div
                  className="absolute rounded-full bg-white/5 border border-white/10"
                  style={{ width: "clamp(280px, 34vw, 375px)", height: "clamp(280px, 34vw, 375px)" }}
                />
                <img
                  src={slide.image}
                  alt={slide.heading.join(" ")}
                  className="relative z-10 object-contain drop-shadow-2xl"
                  style={{ width: "clamp(220px, 20vw, 360px)", height: "auto", maxHeight: "500px" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default HeroSwiper;
