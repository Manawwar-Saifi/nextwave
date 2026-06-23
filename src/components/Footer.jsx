import React from "react";
import { NavLink } from "react-router-dom";
import vipinLogo from "../assets/vipin-logo.webp";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const quickLinks = [
  { label: "Home",       to: "/"          },
  { label: "Categories", to: "/categories"},
  { label: "About Us",   to: "/about"     },
  { label: "Contact Us", to: "/contact"   },
];


const socials = [
  { label: "Facebook",  href: "#", Icon: FacebookIcon  },
  { label: "X",         href: "#", Icon: XIcon         },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn",  href: "#", Icon: LinkedInIcon  },
  { label: "YouTube",   href: "#", Icon: YouTubeIcon   },
];

const Footer = () => (
  <footer className="bg-black text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>

    {/* ── Main Grid ── */}
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Col 1 — Brand */}
      <div data-aos="fade-up" data-aos-delay="0">
        <img
          src={vipinLogo}
          alt="Next Wave Technology"
          className="h-10 w-auto object-contain mb-5 brightness-0 invert"
        />
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
              className="w-8 h-8 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors duration-200"
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
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-3 h-px bg-gray-600 group-hover:bg-white group-hover:w-5 transition-all duration-200" />
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
            <a href="tel:+917404458619" className="hover:text-white transition-colors">+91 74044 58619</a>
          </li>
          <li className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 shrink-0 text-gray-500">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:nextwavemobile1@gmail.com" className="hover:text-white transition-colors break-all">
              nextwavemobile1@gmail.com
            </a>
          </li>
          <li className="flex items-start gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 shrink-0 text-gray-500">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Your City, India</span>
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
        <div className="flex-1 min-h-50 overflow-hidden border border-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d72.8!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU0JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) brightness(0.4) contrast(1.2)", display: "block", minHeight: "200px" }}
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
        <NavLink to="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</NavLink>
        <span className="text-gray-700">|</span>
        <NavLink to="/terms" className="hover:text-white transition-colors duration-200">Terms & Conditions</NavLink>
      </div>
      <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
        © 2025 Next Wave Technology. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
