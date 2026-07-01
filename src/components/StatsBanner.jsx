import React from "react";

const stats = [
  {
    value: "3+",
    label: "Years in Market",
    sub: "Trusted since 2021",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "500+",
    label: "Products",
    sub: "Across all categories",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    value: "200+",
    label: "Business Partners",
    sub: "Retailers & brands",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "15+",
    label: "Product Categories",
    sub: "OEM & ODM ready",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

const StatsBanner = () => (
  <section className="" style={{ background: 'var(--nw-navy)', fontFamily: "'Poppins', sans-serif" }}>
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4">
      {stats.map(({ value, label, sub, icon }, i) => (
        <div
          key={label}
          data-aos="fade-up"
          data-aos-delay={i * 80}
          className={`flex flex-col items-center text-center py-8 px-4
            ${i < stats.length - 1 ? "border-b md:border-b-0 md:border-r border-white/10" : ""}
            ${i === 1 ? "border-r border-white/10 md:border-r" : ""}
          `}
        >
          {/* Icon */}
          <div className="mb-4" style={{ color: 'var(--nw-blue)' }}>{icon}</div>

          {/* Number */}
          <p
            className="text-4xl md:text-5xl font-black mb-1 leading-none"
            style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--nw-orange)' }}
          >
            {value}
          </p>

          {/* Label */}
          <p
            className="text-xs font-bold uppercase tracking-widest text-white mb-1.5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {label}
          </p>

          {/* Sub */}
          <p className="text-xs text-gray-500">{sub}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBanner;
