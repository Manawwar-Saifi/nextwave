import React from "react";
import { NavLink } from "react-router-dom";
const vipinLogo = "/NextWave.webp";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

const Footer = () => (
  <footer className="text-white" style={{ background: 'var(--nw-navy-dk)', fontFamily: "'Poppins', sans-serif" }}>

    {/* ── Main Grid ── */}
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Col 1 — Brand */}
      <div data-aos="fade-up" data-aos-delay="0">
        <div className="mb-5">
          <img
            src={vipinLogo}
            alt="Next Wave Technology"
            style={{ width: '81%', height: 'auto' }}
          />
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          With over 3 years in the market, Next Wave Technology is a trusted
          white-label supplier of premium mobile accessories — delivering
          quality, speed, and reliability directly to your business.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-8 h-8 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-(--nw-blue) hover:text-(--nw-blue) transition-colors duration-200"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Col 2 — Quick Links */}
      <div data-aos="fade-up" data-aos-delay="100">
        <h4
          className="text-xs font-bold uppercase tracking-widest text-white mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Quick Links
        </h4>
        <ul className="space-y-3">
          {quickLinks.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className="text-gray-400 hover:text-(--nw-blue) text-sm transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-3 h-px bg-gray-600 group-hover:bg-(--nw-blue) group-hover:w-5 transition-all duration-200" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Col 3 — Contact */}
      <div data-aos="fade-up" data-aos-delay="200">
        <h4
          className="text-xs font-bold uppercase tracking-widest text-white mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Contact Us
        </h4>
        <ul className="space-y-4 text-sm text-gray-400">
          <li className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 shrink-0 text-gray-500">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
            </svg>
            <a href="tel:+917404458619" className="hover:text-(--nw-blue) transition-colors">+91 74044 58619</a>
          </li>
          <li className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 shrink-0 text-gray-500">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:nextwavemobile1@gmail.com" className="hover:text-(--nw-blue) transition-colors break-all">
              nextwavemobile1@gmail.com
            </a>
          </li>
          <li className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 shrink-0 text-gray-500">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Sonipat, Haryana-131001, India</span>
          </li>
        </ul>
      </div>

      {/* Col 4 — Map */}
      <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col">
        <h4
          className="text-xs font-bold uppercase tracking-widest text-white mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Find Us
        </h4>
        <div className="flex-1 min-h-50 overflow-hidden border border-(--nw-blue)/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13958.65798638082!2d77.02298264357754!3d28.997311323750726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db069d0d702f5%3A0xafcfab94fc181e20!2sSector%2014%2C%20Sonipat%2C%20Haryana%20131001!5e0!3m2!1sen!2sin!4v1782756149977!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Next Wave Technology Location"
          />
        </div>
      </div>
    </div>

    {/* ── Bottom Bar ── */}
    <div className="border-t border-gray-800 px-5 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
      <div className="flex items-center gap-4">
        <NavLink to="/privacy-policy" className="hover:text-(--nw-blue) transition-colors duration-200">Privacy Policy</NavLink>
        <span className="text-gray-700">|</span>
        <NavLink to="/terms" className="hover:text-(--nw-blue) transition-colors duration-200">Terms & Conditions</NavLink>
      </div>
      <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
        © 2025 Next Wave Technology. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
