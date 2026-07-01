import React, { useEffect, useRef } from "react";

const features = [
  {
    title: "Fast Delivery",
    desc: "Fast, reliable delivery ensures your accessories arrive safely, on time, with full tracking support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Wide Range",
    desc: "Offering a wide range of mobile accessories tailored for every style and business need.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    desc: "Quality products, timely support, and dependable service — your satisfaction is always our priority.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    desc: "Every product undergoes strict quality checks to ensure performance, durability, and reliability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

const MarqueeBanner = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const setVar = () => {
      document.documentElement.style.setProperty("--marquee-h", section.offsetHeight + "px");
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(section);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white border-b border-gray-100"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
        {features.map(({ title, desc, icon }, i) => (
          <div
            key={i}
            className="flex items-start gap-4 px-6 py-6"
          >
            {/* Icon box */}
            <div
              className="shrink-0 w-12 h-12 flex items-center justify-center"
              style={{ background: '#EBF5FC', color: 'var(--nw-blue)' }}
            >
              {icon}
            </div>

            <div>
              <p
                className="font-bold text-sm mb-1.5 leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--nw-navy)' }}
              >
                {title}
              </p>
              <p className="text-gray-500 leading-relaxed" style={{ fontSize: "11px" }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeBanner;
