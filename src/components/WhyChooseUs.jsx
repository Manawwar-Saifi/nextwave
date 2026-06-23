import React from "react";

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="1" y="3" width="15" height="13" />
    <path d="M16 8h4l3 5v3h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const cards = [
  {
    Icon: TruckIcon,
    title: "Fast Delivery",
    description:
      "Fast, reliable delivery ensures your accessories arrive safely, on time, with tracking support.",
  },
  {
    Icon: GridIcon,
    title: "Wide Range",
    description:
      "Offering a wide range of mobile accessories tailored for every style and need.",
  },
  {
    Icon: StarIcon,
    title: "Customer Satisfaction",
    description:
      "We prioritize customer satisfaction with quality products, timely support, and dependable service always guaranteed.",
  },
  {
    Icon: ShieldIcon,
    title: "Quality Assurance",
    description:
      "Every product undergoes strict quality checks to ensure performance, durability, and customer satisfaction.",
  },
];

const WhyChooseUs = () => (
  <section
    className="bg-white py-16 px-5 md:px-10"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    <div className="max-w-6xl mx-auto">
      <p
        data-aos="fade-up"
        className="text-center text-xs font-semibold tracking-[0.3em] text-gray-400 uppercase mb-3"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Next Wave Technology
      </p>
      <h2
        data-aos="fade-up"
        data-aos-delay="80"
        className="text-3xl md:text-4xl font-black text-black text-center uppercase tracking-tight mb-12"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        Why Choose Us
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {cards.map(({ Icon, title, description }, i) => (
          <div
            key={title}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="border border-gray-200 p-6 flex flex-col items-start gap-4 hover:border-black transition-colors duration-300 group"
          >
            <div className="text-black group-hover:scale-110 transition-transform duration-300">
              <Icon />
            </div>
            <h3
              className="text-xs font-bold uppercase tracking-wider text-black"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
