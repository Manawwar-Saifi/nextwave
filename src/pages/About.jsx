import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// ── Animated counter ──────────────────────────────────────────────────────────
const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { end: 3,   suffix: "+", label: "Years in Market",     delay: 0   },
  { end: 500, suffix: "+", label: "Products Delivered",  delay: 100 },
  { end: 200, suffix: "+", label: "Business Partners",   delay: 200 },
  { end: 15,  suffix: "+", label: "Product Categories",  delay: 300 },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Quality First",
    desc: "Every product undergoes strict quality checks before dispatch. We partner only with certified manufacturers who meet our high standards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Speed & Reliability",
    desc: "Timely delivery is non-negotiable. We maintain ready inventory to fulfil bulk orders without delays — every time, on time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "White-Label Ready",
    desc: "Custom branding on packaging and products — your brand identity, powered by our manufacturing expertise and supply chain.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Dedicated Support",
    desc: "Our team is always available to assist with product selection, order tracking, branding requirements, and after-sales queries.",
  },
];

const process = [
  { step: "01", title: "Select Products",     desc: "Browse our catalogue and pick from 15+ accessory categories suited to your market." },
  { step: "02", title: "Customize Branding",  desc: "Share your logo and packaging design — we handle the rest, from artwork to print." },
  { step: "03", title: "Place Bulk Order",     desc: "Lock in your quantities with flexible MOQs designed for businesses of all sizes." },
  { step: "04", title: "Fast Dispatch",        desc: "Orders are packed, quality-checked, and dispatched pan-India with full tracking." },
];

// ── Component ─────────────────────────────────────────────────────────────────
const About = () => (
  <main style={{ fontFamily: "'Poppins', sans-serif" }}>

    {/* ── Our Story + Counters ── */}
    <section className="bg-white py-20 px-5 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div data-aos="fade-right">
          <p
            className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our Story
          </p>
          <h2
            className="text-2xl md:text-4xl font-black text-black mb-6 leading-tight"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Built on Trust,<br />Grown Through Quality
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Next Wave Technology was founded with a single mission — to make high-quality
            mobile accessories accessible to every business, regardless of size. Starting
            with a small catalogue, we have grown into one of India's reliable white-label
            suppliers serving retailers, distributors, and brands nationwide.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            With over 3 years of experience and a steadily growing product portfolio
            spanning neckbands, TWS earbuds, chargers, cables, power banks, and smart
            bands, we continue to expand our reach while maintaining the quality our
            partners depend on every day.
          </p>
          <NavLink
            to="/contact"
            className="inline-block text-white text-xs font-bold tracking-widest uppercase px-7 py-3 hover:opacity-90 transition-opacity duration-200"
            style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
          >
            Partner With Us
          </NavLink>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
          {stats.map(({ end, suffix, label, delay }) => (
            <div
              key={label}
              className="border border-gray-200 p-8 hover:border-(--nw-blue) transition-colors duration-300 group"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <p
                className="text-4xl md:text-5xl font-black mb-2 leading-none"
                style={{ fontFamily: "'Lato', sans-serif", color: 'var(--nw-orange)' }}
              >
                <CountUp end={end} suffix={suffix} />
              </p>
              <div className="w-6 h-px mb-2 group-hover:w-10 transition-all duration-300" style={{ background: 'var(--nw-blue)' }} />
              <p
                className="text-xs text-gray-500 uppercase tracking-widest"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Vision & Mission ── */}
    <section className="bg-white py-14 px-6 md:px-16 lg:px-32" data-aos="fade-up">
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-5">

        {/* Vision */}
        <div className="flex flex-col items-center text-center px-8 py-12" style={{ background: '#EBF5FC' }}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mb-5" style={{ stroke: 'var(--nw-blue)', opacity: 0.7 }}>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--nw-blue)' }}
          >
            Our Vision
          </p>
          <h2
            className="text-xl md:text-2xl font-black mb-3 leading-tight"
            style={{ fontFamily: "'Lato', sans-serif", color: 'var(--nw-navy)' }}
          >
            India's Most Trusted Mobile Accessories Partner
          </h2>
          <div className="w-8 h-0.5 mb-4 mx-auto" style={{ background: 'var(--nw-orange)' }} />
          <p className="text-gray-600 text-sm leading-relaxed">
            To be the go-to B2B destination for mobile accessories across India — where
            every retailer, distributor, and emerging brand can source premium products
            with confidence, backed by consistent quality and unwavering reliability.
          </p>
        </div>

        {/* Mission */}
        <div className="flex flex-col items-center text-center px-8 py-12" style={{ background: '#FEF0E9' }}>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 mb-5" style={{ stroke: 'var(--nw-orange)', opacity: 0.7 }}>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--nw-orange)' }}
          >
            Our Mission
          </p>
          <h2
            className="text-xl md:text-2xl font-black mb-3 leading-tight"
            style={{ fontFamily: "'Lato', sans-serif", color: 'var(--nw-navy)' }}
          >
            Deliver Quality That Your Business Can Build On
          </h2>
          <div className="w-8 h-0.5 mb-4 mx-auto" style={{ background: 'var(--nw-orange)' }} />
          <p className="text-gray-600 text-sm leading-relaxed">
            To empower businesses of all sizes with premium white-label mobile accessories
            through ethical sourcing, rigorous quality control, flexible MOQs, and fast
            pan-India delivery — so our partners can focus on growth while we handle the supply chain.
          </p>
        </div>

      </div>
    </section>

    {/* ── What Drives Us ── */}
    <section className="bg-white py-20 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <p
            className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our Values
          </p>
          <h2
            className="text-2xl md:text-4xl font-black text-black"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            What Drives Us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="border border-gray-200 p-7 hover:border-(--nw-blue) transition-colors duration-300 group"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="text-black mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {icon}
              </div>
              <h3
                className="text-xs font-bold uppercase tracking-widest text-black mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Who We Are Banner ── */}
    <section
      className="relative overflow-hidden py-16 px-5 md:px-10 text-center"
      style={{ background: '#EBF5FC' }}
      data-aos="fade-up"
    >
      {/* grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(to right, #0B1929 1px, transparent 1px), linear-gradient(to bottom, #0B1929 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* left accent bar */}
      <div className="absolute top-0 left-0 bottom-0 w-1 pointer-events-none" style={{ background: 'var(--nw-blue)' }} />
      <div className="relative z-10 max-w-3xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--nw-blue)' }}
        >
          Who We Are
        </p>
        <h2
          className="text-3xl md:text-5xl font-black mb-5 leading-tight"
          style={{ fontFamily: "'Lato', sans-serif", color: 'var(--nw-navy)' }}
        >
          About Next Wave Technology
        </h2>
        <div className="w-12 h-px mx-auto mb-5" style={{ background: 'var(--nw-orange)' }} />
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          A trusted B2B supplier of premium mobile accessories — powering businesses
          across India with OEM and ODM solutions since 2021. From Sonipat, Haryana,
          we serve retailers, distributors, and brands nationwide.
        </p>
      </div>
    </section>

    {/* ── How We Work ── */}
    <section className="bg-gray-50 py-20 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <p
            className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Simple Process
          </p>
          <h2
            className="text-2xl md:text-4xl font-black text-black"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            How We Work
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map(({ step, title, desc }, i) => (
            <div
              key={step}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <p
                className="text-5xl font-black mb-4 leading-none select-none"
                style={{ color: 'var(--nw-orange)', opacity: 0.18, fontFamily: "'Lato', sans-serif" }}
              >
                {step}
              </p>
              <div className="w-8 h-px mb-4" style={{ background: 'var(--nw-blue)' }} />
              <h3
                className="text-xs font-bold uppercase tracking-widest text-black mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-16 px-5 md:px-10 bg-white">
      <div
        className="relative overflow-hidden text-center py-16 px-6 md:px-16 mx-auto"
        style={{ background: '#EBF5FC', width: "90%" }}
        data-aos="fade-up"
      >
        {/* subtle grid — dark lines on light bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(to right, #0B1929 1px, transparent 1px), linear-gradient(to bottom, #0B1929 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* left accent bar */}
        <div className="absolute top-0 left-0 bottom-0 w-1 pointer-events-none" style={{ background: 'var(--nw-blue)' }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--nw-blue)' }}
          >
            Let's Grow Together
          </p>
          <h2
            className="text-2xl md:text-4xl font-black mb-4 leading-tight"
            style={{ fontFamily: "'Lato', sans-serif", color: 'var(--nw-navy)' }}
          >
            Ready to Partner With Us?
          </h2>
          <div className="w-12 h-0.5 mx-auto mb-6" style={{ background: 'var(--nw-orange)' }} />
          <p className="text-gray-600 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
            Get in touch to discuss bulk orders, white-label packaging, product catalogues,
            or any custom requirement for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/contact"
              className="inline-block text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:opacity-90 active:scale-95 transition-all duration-200"
              style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Us →
            </NavLink>
            <NavLink
              to="/categories/neckband"
              className="inline-block text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:opacity-90 active:scale-95 transition-all duration-200"
              style={{ border: '1px solid rgba(27,160,225,0.5)', color: 'var(--nw-blue)', fontFamily: "'Montserrat', sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--nw-blue)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--nw-blue)'; }}
            >
              Browse Products
            </NavLink>
          </div>
        </div>
      </div>
    </section>

  </main>
);

export default About;
