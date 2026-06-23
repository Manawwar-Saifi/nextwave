import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
      {ICONS[badgeIcon] || ICONS.zap}
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

      <Link
        to={`/categories/${Object.keys(productData).find(k => productData[k].heading === categoryHeading)}`}
        className="block w-full bg-black text-white text-xs font-bold tracking-widest uppercase py-2.5 text-center hover:bg-gray-800 active:scale-95 transition-all duration-200"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        VIEW MORE
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
          className="text-sm font-semibold text-black underline underline-offset-4 hover:text-gray-500 transition-colors duration-200"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          View All
        </Link>
      </div>

      {/* Swiper */}
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
        {cat.items.map((product) => (
          <SwiperSlide key={product.model}>
            <ProductCard
              {...product}
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
          className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Featured Products
        </h2>
      </div>

      {featuredSlugs.map((slug) => (
        <CategoryBlock key={slug} slug={slug} />
      ))}

    </div>
  </section>
);

export default FeaturedProducts;
