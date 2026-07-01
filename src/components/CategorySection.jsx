import React from "react";
import { Link } from "react-router-dom";

import Powerbank from "../../public/category/powerbank.webp";
import Speaker from "../../public/category/speaker.webp";
import Band from "../../public/category/smartband.webp";
import Buds from "../../public/category/Buds 5 pro.webp";
import EarPiece from "../../public/category/ear-piece.webp";
import Cable from "../../public/category/cable.webp";

const NeckbandIcon = () => (
  <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-20">
    <path d="M20 30 Q60 10 100 30" strokeWidth="3" />
    <path d="M20 30 Q10 60 15 80" />
    <path d="M100 30 Q110 60 105 80" />
    <rect x="8" y="75" width="14" height="22" rx="4" fill="currentColor" stroke="none" opacity="0.8" />
    <rect x="98" y="75" width="14" height="22" rx="4" fill="currentColor" stroke="none" opacity="0.8" />
    <line x1="30" y1="25" x2="25" y2="35" strokeWidth="3" />
    <line x1="90" y1="25" x2="95" y2="35" strokeWidth="3" />
  </svg>
);

const TWSIcon = () => (
  <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-20">
    {/* Case */}
    <rect x="25" y="40" width="70" height="52" rx="16" strokeWidth="2.5" />
    <line x1="60" y1="40" x2="60" y2="92" strokeWidth="1.5" opacity="0.4" />
    {/* Left earbud */}
    <circle cx="43" cy="24" r="12" strokeWidth="2.5" />
    <circle cx="43" cy="24" r="5" fill="currentColor" stroke="none" opacity="0.5" />
    <line x1="43" y1="36" x2="43" y2="42" strokeWidth="2" />
    {/* Right earbud */}
    <circle cx="77" cy="24" r="12" strokeWidth="2.5" />
    <circle cx="77" cy="24" r="5" fill="currentColor" stroke="none" opacity="0.5" />
    <line x1="77" y1="36" x2="77" y2="42" strokeWidth="2" />
  </svg>
);

const PowerBankIcon = () => (
  <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-20">
    <rect x="20" y="15" width="80" height="70" rx="8" strokeWidth="2.5" />
    <rect x="48" y="8" width="24" height="8" rx="4" />
    {/* LED dots */}
    <circle cx="38" cy="50" r="4" fill="currentColor" stroke="none" opacity="0.7" />
    <circle cx="52" cy="50" r="4" fill="currentColor" stroke="none" opacity="0.7" />
    <circle cx="66" cy="50" r="4" fill="currentColor" stroke="none" opacity="0.3" />
    <circle cx="80" cy="50" r="4" fill="currentColor" stroke="none" opacity="0.15" />
    {/* Port */}
    <rect x="44" y="68" width="32" height="8" rx="4" opacity="0.5" />
  </svg>
);

const ChargerIcon = () => (
  <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-20">
    <rect x="30" y="8" width="60" height="65" rx="8" strokeWidth="2.5" />
    {/* USB port */}
    <rect x="46" y="70" width="28" height="10" rx="3" />
    <line x1="60" y1="80" x2="60" y2="95" strokeWidth="3" />
    {/* Pin */}
    <rect x="50" y="95" width="20" height="5" rx="2" />
    {/* Lightning bolt */}
    <polyline points="65,25 55,48 63,48 55,73" strokeWidth="3" fill="none" />
  </svg>
);

const CableIcon = () => (
  <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-20">
    {/* USB-A head */}
    <rect x="8" y="42" width="22" height="16" rx="2" />
    <rect x="12" y="46" width="14" height="8" rx="1" opacity="0.4" />
    {/* Cable curve */}
    <path d="M30 50 C50 50 40 30 60 30 C80 30 70 70 90 70" strokeWidth="3" />
    {/* USB-C head */}
    <rect x="90" y="62" width="22" height="16" rx="5" />
    <rect x="94" y="66" width="14" height="8" rx="3" opacity="0.4" />
  </svg>
);

const SmartWatchIcon = () => (
  <svg viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-20">
    {/* Band top */}
    <path d="M44 18 L44 8 Q44 4 48 4 L72 4 Q76 4 76 8 L76 18" />
    {/* Band bottom */}
    <path d="M44 82 L44 92 Q44 96 48 96 L72 96 Q76 96 76 92 L76 82" />
    {/* Watch body */}
    <rect x="28" y="18" width="64" height="64" rx="14" strokeWidth="2.5" />
    {/* Screen */}
    <rect x="36" y="26" width="48" height="48" rx="10" opacity="0.15" fill="currentColor" />
    {/* Time */}
    <text x="60" y="54" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Montserrat, sans-serif">10:10</text>
    {/* Crown */}
    <rect x="92" y="42" width="6" height="16" rx="3" />
  </svg>
);

export const categories = [
  { slug: "neckband", name: "Neckband", Icon: NeckbandIcon, image: EarPiece },
  { slug: "tws", name: "TWS", Icon: TWSIcon, image: Buds },
  { slug: "power-bank", name: "Power Bank", Icon: PowerBankIcon, image: Powerbank },
  { slug: "charger", name: "Charger", Icon: ChargerIcon, image: Speaker },
  { slug: "cable", name: "Cable", Icon: CableIcon, image: Cable },
  { slug: "smart-band", name: "Smart Band", Icon: SmartWatchIcon, image: Band },
];

const CategorySection = () => (
  <section
    className="bg-gray-50 py-16 px-5 md:px-10"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    <div className="max-w-6xl mx-auto">
      <h2
        data-aos="fade-up"
        className="text-2xl md:text-4xl font-semibold text-black text-center mb-4"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        Manufacturing Categories
      </h2>
      <div className="flex justify-center mb-10">
        <div className="w-12 h-0.5" style={{ background: 'var(--nw-orange)' }} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
        {categories.map(({ slug, name, Icon, image }, i) => (
          <Link
            key={slug}
            to={`/categories/${slug}`}
            data-aos="fade-up"
            data-aos-delay={i * 60}
            className="group bg-white border border-gray-100 hover:border-(--nw-blue) hover:shadow-md transition-all duration-300 flex flex-col items-center pt-6 pb-5 px-3 cursor-pointer"
          >
            <div className="h-28 w-full flex items-center justify-center overflow-hidden text-gray-700 group-hover:text-black transition-colors duration-300">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <Icon />
              )}
            </div>
            <span
              className="text-sm font-medium text-black underline underline-offset-4 decoration-gray-400 group-hover:text-(--nw-blue) group-hover:decoration-(--nw-blue) transition-colors duration-300 text-center mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default CategorySection;
