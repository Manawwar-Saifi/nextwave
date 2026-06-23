import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

// Replace each item's `logo` with a real import once you have the files:
// import acmeLogo from "../assets/clients/acme.png";
// Then set logo: acmeLogo in the array below.
const clients = [
  { name: "Acme Retail" },
  { name: "BrandX Store" },
  { name: "ZenMobile" },
  { name: "UrbanTech" },
  { name: "PrimeLine" },
  { name: "NovaBrands" },
  { name: "SwiftRetail" },
  { name: "AlphaGear" },
  { name: "VoltEdge" },
  { name: "Nexora" },
  { name: "PeakTrade" },
  { name: "ClarityHub" },
];

const ClientMarquee = () => (
  <section
    className="bg-white py-14 border-y border-gray-100 overflow-hidden"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    {/* Heading */}
    <div className="max-w-6xl mx-auto px-5 md:px-10 mb-10 text-center" data-aos="fade-up">
      <p
        className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-1"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Trusted By
      </p>
      <h2
        className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        Our Clients &amp; Partners
      </h2>
    </div>

    {/* Marquee row 1 — left to right */}
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop={true}
      freeMode={{ enabled: true, momentum: false }}
      autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={5000}
      slidesPerView={2.5}
      spaceBetween={0}
      allowTouchMove={true}
      breakpoints={{
        480:  { slidesPerView: 3.5 },
        768:  { slidesPerView: 5 },
        1024: { slidesPerView: 7 },
      }}
      className="mb-4"
    >
      {clients.map((client) => (
        <SwiperSlide key={client.name}>
          <LogoSlide client={client} />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Marquee row 2 — right to left */}
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop={true}
      freeMode={{ enabled: true, momentum: false }}
      autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true, pauseOnMouseEnter: true }}
      speed={5000}
      slidesPerView={2.5}
      spaceBetween={0}
      allowTouchMove={true}
      breakpoints={{
        480:  { slidesPerView: 3.5 },
        768:  { slidesPerView: 5 },
        1024: { slidesPerView: 7 },
      }}
    >
      {[...clients].reverse().map((client) => (
        <SwiperSlide key={`r-${client.name}`}>
          <LogoSlide client={client} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

/* ── Individual logo slide ────────────────────────────────────────────────── */
const LogoSlide = ({ client }) => (
  <div className="group flex items-center justify-center px-6 py-3 border-r border-gray-100 cursor-default select-none">
    {client.logo ? (
      /* Real logo image */
      <img
        src={client.logo}
        alt={client.name}
        className="h-10 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    ) : (
      /* Placeholder — remove once real logos are added */
      <div
        className="border border-gray-200 px-5 py-3 opacity-40 group-hover:opacity-100 group-hover:border-gray-400 transition-all duration-300"
        style={{ fontFamily: "'Montserrat', sans-serif", minWidth: "130px" }}
      >
        <span className="block text-xs font-black tracking-[0.15em] uppercase text-black text-center whitespace-nowrap">
          {client.name}
        </span>
      </div>
    )}
  </div>
);

export default ClientMarquee;
