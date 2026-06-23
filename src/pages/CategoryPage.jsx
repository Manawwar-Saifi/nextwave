import React from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { productData } from "../data/products";

/* ── Badge icons ─────────────────────────────────────────────────────────── */
const HeadphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);
const BatteryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0">
    <rect x="1" y="6" width="18" height="12" rx="2" />
    <line x1="23" y1="13" x2="23" y2="11" />
    <line x1="6" y1="10" x2="6" y2="14" />
    <line x1="10" y1="10" x2="10" y2="14" />
  </svg>
);
const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const BADGE_ICONS = {
  headphone: <HeadphoneIcon />,
  battery:   <BatteryIcon />,
  zap:       <ZapIcon />,
  heart:     <HeartIcon />,
};

/* ── Product Card ─────────────────────────────────────────────────────────── */
const ProductCard = ({ model, name, spec, image, categoryHeading, badgeIcon }) => (
  <div
    className="bg-white border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    {/* Image area */}
    <div className="flex items-center justify-center overflow-hidden bg-white" style={{ height: "210px" }}>
      <img
        src={image}
        alt={name}
        className="h-full w-full object-contain p-4 drop-shadow-md group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Spec badge — full width, pinned to bottom of image */}
    <div className="flex items-center gap-1.5 bg-black text-white px-3 py-2">
      {BADGE_ICONS[badgeIcon] || BADGE_ICONS.zap}
      <span className="text-xs font-semibold tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {spec}
      </span>
    </div>

    {/* Card body */}
    <div className="p-3 flex flex-col flex-1">
      <p className="text-xs text-gray-400 mb-1.5">{categoryHeading}</p>
      <div className="border-t border-dashed border-gray-200 mb-2" />
      <p className="text-xs font-semibold text-black leading-snug mb-4 flex-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {model} – {name}
      </p>

      <button
        className="w-full bg-black text-white text-xs font-bold tracking-widest uppercase py-2.5 hover:bg-gray-800 active:scale-95 transition-all duration-200"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        VIEW MORE
      </button>
    </div>
  </div>
);

/* ── Page ─────────────────────────────────────────────────────────────────── */
const CategoryPage = () => {
  const { slug } = useParams();
  const meta = productData[slug];

  if (!meta) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Category not found.</p>
          <Link to="/" className="text-black underline text-sm">Back to Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── Hero ── */}
      <section className="bg-white relative overflow-hidden" style={{ minHeight: "480px" }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center"
          style={{ minHeight: "480px" }}
        >
          {/* Left — Text */}
          <div className="w-full md:w-1/2 py-16 relative z-10">
            <p
              className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {meta.tag}
            </p>
            <h1
              className="text-5xl md:text-6xl font-black text-black mb-5 leading-tight"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {meta.heroHeading.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              {meta.description}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold tracking-widest uppercase px-7 py-3 hover:bg-gray-800 active:scale-95 transition-all duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              VIEW STORE
            </Link>
          </div>

          {/* Right — Product image */}
          <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0 md:absolute md:right-0 md:top-0 md:h-full">
            <img
              src={meta.items[0].image}
              alt={meta.heading}
              className="object-contain drop-shadow-2xl"
              style={{ width: "clamp(260px, 40vw, 520px)", height: "auto", maxHeight: "460px" }}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-100" />
      </section>

      {/* ── Key Features ── */}
      <section className="py-12 px-5 md:px-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Key Features
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {meta.features.map((feat) => (
              <div
                key={feat}
                className="bg-white border border-gray-200 hover:border-black transition-colors duration-200 px-4 py-3 text-center"
              >
                <span
                  className="text-xs font-semibold text-gray-700 leading-snug"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-12 px-5 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-xl md:text-2xl font-black text-black"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Latest {meta.heading}
            </h2>
            <Link
              to="/contact"
              className="text-sm font-semibold text-black underline underline-offset-4 hover:text-gray-600 transition-colors duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              View All
            </Link>
          </div>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={2}
            spaceBetween={16}
            breakpoints={{
              640:  { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="category-swiper"
            style={{ paddingBottom: "44px" }}
          >
            {meta.items.map((product) => (
              <SwiperSlide key={product.model}>
                <ProductCard
                  {...product}
                  categoryHeading={meta.heading}
                  badgeIcon={meta.badgeIcon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-black text-white py-14 px-5 md:px-10 text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Next Wave Technology
        </p>
        <h3
          className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-5"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Interested in {meta.heading}?
        </h3>
        <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
          Get in touch for bulk pricing, custom branding, and OEM / ODM enquiries.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-black text-xs font-bold tracking-widest uppercase px-8 py-3 hover:bg-gray-200 transition-colors duration-200"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Contact Us
        </Link>
      </section>

    </main>
  );
};

export default CategoryPage;
