import React from "react";
import { NavLink } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Browse Categories",
    description:
      "Explore our full range of mobile accessories — neckbands, TWS, chargers, cables, power banks, and smart watches.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Contact & Discuss",
    description:
      "Reach out with your requirements — product type, quantity, custom branding, and packaging preferences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Confirm & Pay",
    description:
      "Review the product samples, finalise quantities, confirm your white-label branding details, and place the order.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Production & Delivery",
    description:
      "We manufacture, quality-check, and dispatch your branded products with full tracking support to your doorstep.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const HowToOrder = () => (
  <section
    className="bg-white py-16 px-5 md:px-10"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="mb-14 text-center" data-aos="fade-up">
        <p
          className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Simple Process
        </p>
        <h2
          className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          How to Order
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
        {/* Connector line — desktop only */}
        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0" />

        {steps.map(({ number, title, description, icon }, i) => (
          <div
            key={number}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="relative z-10 flex flex-col items-center text-center px-6 py-8 group"
          >
            {/* Icon circle */}
            <div className="w-20 h-20 bg-black text-white flex items-center justify-center mb-5 group-hover:bg-gray-800 transition-colors duration-300">
              {icon}
            </div>

            {/* Step number */}
            <span
              className="text-xs font-black text-gray-300 tracking-widest mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              STEP {number}
            </span>

            {/* Title */}
            <h3
              className="text-sm font-bold uppercase tracking-wide text-black mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {title}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-relaxed max-w-50">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center" data-aos="fade-up">
        <NavLink
          to="/contact"
          className="inline-block bg-black text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-gray-800 active:scale-95 transition-all duration-200"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Start Your Order
        </NavLink>
      </div>

    </div>
  </section>
);

export default HowToOrder;
