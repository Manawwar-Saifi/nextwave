import React from "react";
import { useParams, Link, NavLink, Navigate } from "react-router-dom";
import { productData } from "../data/products";

/* ── Icons ── */
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ── Badge icons ── */
const HeadphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);
const BatteryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="1" y="6" width="18" height="12" rx="2" />
    <line x1="23" y1="13" x2="23" y2="11" />
  </svg>
);
const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const ICONS = { headphone: <HeadphoneIcon />, battery: <BatteryIcon />, zap: <ZapIcon />, heart: <HeartIcon /> };

/* ── Related product card ── */
const RelatedCard = ({ item, slug, cat }) => (
  <Link
    to={`/categories/${slug}/${item.model}`}
    className="group flex flex-col bg-white transition-all duration-300 hover:-translate-y-1"
    style={{ border: '1px solid #f0f0f0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
  >
    <div className="flex items-center justify-center overflow-hidden shrink-0" style={{ height: '140px', background: '#f7f7f7' }}>
      <img src={item.image} alt={item.name} className="h-full w-full object-contain p-3 group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="px-3 py-3">
      <div className="inline-flex items-center gap-1 px-2 py-0.5 mb-2" style={{ background: '#EBF5FC', color: 'var(--nw-blue)' }}>
        {ICONS[cat.badgeIcon] || ICONS.zap}
        <span className="text-[9px] font-bold tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.spec}</span>
      </div>
      <p className="text-[11px] font-semibold text-black leading-snug" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {item.model} – {item.name}
      </p>
    </div>
  </Link>
);

/* ── Page ── */
const ProductDetail = () => {
  const { slug, model } = useParams();
  const cat = productData[slug];
  const item = cat?.items.find(i => i.model === model);

  if (!cat || !item) return <Navigate to="/categories/neckband" replace />;

  const related = cat.items.filter(i => i.model !== model).slice(0, 4);

  return (
    <main style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── Breadcrumb ── */}
      <section className="py-4 px-5 md:px-10 border-b border-gray-200" style={{ background: '#EBF5FC' }}>
        <div className="max-w-6xl mx-auto flex items-center gap-2 flex-wrap text-xs" style={{ color: 'var(--nw-navy)' }}>
          <Link to="/" className="hover:underline" style={{ color: 'var(--nw-blue)' }}>Home</Link>
          <ChevronRight />
          <Link to={`/categories/${slug}`} className="hover:underline" style={{ color: 'var(--nw-blue)' }}>{cat.heading}</Link>
          <ChevronRight />
          <span className="text-gray-500 truncate max-w-[200px]">{item.name}</span>
        </div>
      </section>

      {/* ── Main Detail ── */}
      <section className="bg-white py-10 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Image panel */}
          <div
            className="flex items-center justify-center sticky top-28"
            style={{ background: '#f7f7f7', minHeight: '340px', border: '1px solid #efefef' }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain p-8"
              style={{ maxHeight: '380px' }}
            />
          </div>

          {/* Info panel */}
          <div>
            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4"
              style={{ background: '#EBF5FC', color: 'var(--nw-blue)' }}>
              {ICONS[cat.badgeIcon] || ICONS.zap}
              <span className="text-[10px] font-bold tracking-widest uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {cat.tag}
              </span>
            </div>

            {/* Name + model */}
            <h1
              className="text-2xl md:text-3xl font-black leading-tight mb-1"
              style={{ fontFamily: "'Lato', sans-serif", color: 'var(--nw-navy)' }}
            >
              {item.name}
            </h1>
            <p className="text-xs font-semibold mb-4 tracking-widest uppercase" style={{ color: 'var(--nw-blue)', fontFamily: "'Montserrat', sans-serif" }}>
              Model: {item.model}
            </p>

            {/* Divider */}
            <div className="w-10 h-0.5 mb-5" style={{ background: 'var(--nw-orange)' }} />

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-7">{item.description}</p>

            {/* Specs table */}
            <div className="mb-7 border border-gray-100">
              {item.specs.map(({ label, value }, i) => (
                <div
                  key={label}
                  className="flex items-center text-xs"
                  style={{ borderBottom: i < item.specs.length - 1 ? '1px solid #f3f3f3' : 'none' }}
                >
                  <span
                    className="w-2/5 px-4 py-2.5 font-semibold text-gray-500 shrink-0"
                    style={{ background: '#fafafa', fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {label}
                  </span>
                  <span className="px-4 py-2.5 text-gray-700 font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Category features */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {cat.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="shrink-0" style={{ color: 'var(--nw-blue)' }}><CheckIcon /></span>
                  {f}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-7 py-3.5 hover:opacity-90 active:scale-95 transition-all duration-200"
                style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
              >
                Enquire Now <ArrowIcon />
              </NavLink>
              <Link
                to={`/categories/${slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-7 py-3.5 border hover:opacity-80 active:scale-95 transition-all duration-200"
                style={{ borderColor: 'var(--nw-blue)', color: 'var(--nw-blue)', fontFamily: "'Montserrat', sans-serif" }}
              >
                View All {cat.heading}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="py-12 px-5 md:px-10" style={{ background: '#f7f9fc' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-lg font-black text-black uppercase tracking-tight" style={{ fontFamily: "'Lato', sans-serif" }}>
                More {cat.heading} Models
              </h2>
              <Link
                to={`/categories/${slug}`}
                className="text-xs font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--nw-blue)', fontFamily: "'Montserrat', sans-serif" }}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(rel => (
                <RelatedCard key={rel.model} item={rel} slug={slug} cat={cat} />
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
};

export default ProductDetail;
