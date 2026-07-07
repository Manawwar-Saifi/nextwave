import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { productData, featuredSlugs } from "../data/products";

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

const ICONS = {
  headphone: <HeadphoneIcon />,
  battery:   <BatteryIcon />,
  zap:       <ZapIcon />,
  heart:     <HeartIcon />,
};

/* ── Product Card ─────────────────────────────────────────────────────────── */
const ProductCard = ({ model, name, spec, image, categoryHeading, badgeIcon, slug }) => (
  <div
    className="group relative flex flex-col h-full bg-white transition-all duration-300 hover:-translate-y-1 hover:z-10"
    style={{
      fontFamily: "'Poppins', sans-serif",
      boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
      border: '1px solid #f0f0f0',
    }}
  >
    {/* Category pill — absolute to card, z-10 so it sits above image */}
    <span
      className="absolute top-2 left-2 z-10 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5"
      style={{ background: 'var(--nw-navy)', color: '#fff', fontFamily: "'Montserrat', sans-serif" }}
    >
      {categoryHeading}
    </span>

    {/* Image area — overflow-hidden keeps scale effect from bleeding into body */}
    <div
      className="flex items-center justify-center overflow-hidden shrink-0"
      style={{ height: "170px", background: '#f7f7f7' }}
    >
      <img
        src={image}
        alt={name}
        className="h-full w-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Card body */}
    <div className="flex flex-col flex-1 px-3 pt-3 pb-3">
      {/* Spec badge */}
      <div
        className="inline-flex items-center gap-1 self-start px-2 py-0.5 mb-2 rounded-sm"
        style={{ background: '#EBF5FC', color: 'var(--nw-blue)' }}
      >
        {ICONS[badgeIcon] || ICONS.zap}
        <span className="text-[9px] font-bold tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {spec}
        </span>
      </div>

      {/* Name */}
      <p
        className="text-[11px] font-semibold text-black leading-snug flex-1 mb-3"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {model} – {name}
      </p>

      {/* CTA */}
      <Link
        to={`/categories/${slug}/${model}`}
        className="flex items-center justify-center gap-1.5 w-full text-white text-[10px] font-bold tracking-widest uppercase py-2 text-center hover:opacity-90 active:scale-95 transition-all duration-200"
        style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
      >
        View Details
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

/* ── Category Block ───────────────────────────────────────────────────────── */
const CategoryBlock = ({ slug }) => {
  const cat = productData[slug];
  if (!cat) return null;

  return (
    <div className="mb-14 last:mb-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-xl md:text-2xl font-black text-black"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Latest {cat.heading}
        </h2>
        <Link
          to={`/categories/${slug}`}
          className="text-sm font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity duration-200"
          style={{ color: 'var(--nw-blue)', fontFamily: "'Montserrat', sans-serif" }}
        >
          View All
        </Link>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={2}
        spaceBetween={16}
        speed={1500}
        breakpoints={{
            0:  { slidesPerView: 1.25, spaceBetween: 20 },
          640:  { slidesPerView: 1.25, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 24 },
        }}
        className="category-swiper"
        style={{ paddingBottom: "44px" }}
      >
        {cat.items.map((product) => (
          <SwiperSlide key={product.model} style={{ height: 'auto' }}>
            <ProductCard
              {...product}
              slug={slug}
              categoryHeading={cat.heading}
              badgeIcon={cat.badgeIcon}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/* ── Section ──────────────────────────────────────────────────────────────── */
const FeaturedProducts = () => (
  <section className="bg-gray-50 py-16 px-5 md:px-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
    <div className="max-w-6xl mx-auto">

      {/* Section heading */}
      <div className="mb-12 text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Our Products
        </p>
        <h2
          className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight mb-4"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Featured Products
        </h2>
        <div className="flex justify-center">
          <div className="w-12 h-0.5" style={{ background: 'var(--nw-orange)' }} />
        </div>
      </div>

      {featuredSlugs.map((slug) => (
        <CategoryBlock key={slug} slug={slug} />
      ))}

    </div>
  </section>
);

export default FeaturedProducts;
