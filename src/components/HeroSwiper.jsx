import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import FloatingLines from "./Wave";

const slides = [
  {
    tag: "#1 India's Most Trusted OEM ODM Mobile Accessories",
    heading: ["Your Manufacturing", "Partner"],
    description:
      "Premium white-label mobile accessories engineered for performance — neckbands, TWS, speakers, cables and more. OEM &amp; ODM ready.",
  },
  {
    tag: "Trusted by 200+ Business Partners Across India",
    heading: ["White Label", "Solutions"],
    description:
      "Launch your own mobile accessories brand with our complete OEM &amp; ODM services — custom branding, packaging, and pan-India delivery.",
  },
  {
    tag: "15+ Product Categories · 500+ Products",
    heading: ["Bulk Orders,", "Best Prices"],
    description:
      "Competitive bulk pricing on neckbands, TWS earbuds, chargers, cables, power banks, and smart accessories for retailers and distributors.",
  },
];

/* ── Trusted Badge ── */
const TrustedBadge = () => (
  <div
    className="absolute top-6 right-6 z-30 w-16 h-16 md:w-20 md:h-20"
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="46" fill="none" stroke="var(--nw-blue)" strokeWidth="2" opacity="0.5" />
      <polygon
        points="50,6 53,18 65,18 56,26 59,38 50,31 41,38 44,26 35,18 47,18"
        fill="var(--nw-orange)" opacity="0.9"
      />
      <path id="heroTopArc" d="M 15,50 A 35,35 0 0,1 85,50" fill="none" />
      <path id="heroBotArc" d="M 20,56 A 32,32 0 0,0 80,56" fill="none" />
      <text fontSize="9" fill="#ffffff" fontWeight="700" letterSpacing="2" textAnchor="middle">
        <textPath href="#heroTopArc" startOffset="50%">INDIA'S MOST</textPath>
      </text>
      <text x="50" y="58" fontSize="13" fill="#ffffff" fontWeight="900" textAnchor="middle" letterSpacing="1">
        TRUSTED
      </text>
      <text fontSize="7.5" fill="#ffffff" fontWeight="600" letterSpacing="1.5" textAnchor="middle">
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

/* ── Hero ── */
const HeroSwiper = () => (
  <section
    className="w-full overflow-hidden relative"
    style={{ background: 'var(--nw-navy)', height: "calc(100dvh - var(--header-h, 80px) - var(--marquee-h, 52px))" }}
  >
    {/* FloatingLines animated background */}
    <div className="absolute inset-0 z-0" style={{ opacity: 0.35 }}>
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={8}
        lineDistance={8}
        bendRadius={8}
        bendStrength={-2}
        interactive
        parallax={true}
        animationSpeed={1}
        linesGradient={["#E8622B", "#1BA0E1", "#1565B7"]}
        mixBlendMode="screen"
      />
    </div>

    {/* Subtle grid overlay */}
    <div
      className="absolute inset-0 z-1 pointer-events-none"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
    <TrustedBadge />

    {/* Swiper — full height */}
    <div className="relative z-10 w-full h-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="flex flex-col items-center text-center"
                style={{ maxWidth: "720px", padding: "0 clamp(24px, 5vw, 64px)" }}
              >
                <p
                  className="font-semibold tracking-[0.2em] uppercase mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px", color: 'var(--nw-blue)' }}
                >
                  {slide.tag}
                </p>

                <h1
                  className="leading-tight mb-5"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(32px, 5vw, 60px)",
                    color: '#ffffff',
                  }}
                >
                  {slide.heading.map((line, j) => (
                    <span key={j} className="block">{line}</span>
                  ))}
                </h1>

                <div className="w-14 h-0.5 mb-5" style={{ background: 'var(--nw-orange)' }} />

                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ fontFamily: "'Poppins', sans-serif", maxWidth: "540px", color: 'rgba(255,255,255,0.65)' }}
                  dangerouslySetInnerHTML={{ __html: slide.description }}
                />

                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    className="text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer"
                    style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
                  >
                    View Products
                  </button>
                  <button
                    className="text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer border"
                    style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff', fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default HeroSwiper;
