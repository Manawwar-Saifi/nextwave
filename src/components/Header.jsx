import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import vipinLogo from "../assets/vipin-logo.webp";

// ── Icons ─────────────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.75 h-3.75">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.75 h-3.75">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.75 h-3.75">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.75 h-3.75">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.75 h-3.75">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const socialLinks = [
  { label: "Facebook",  href: "#", Icon: FacebookIcon  },
  { label: "X",         href: "#", Icon: XIcon         },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "LinkedIn",  href: "#", Icon: LinkedInIcon  },
  { label: "YouTube",   href: "#", Icon: YouTubeIcon   },
];

const categories = [
  "Neckband", "TWS", "Power Bank", "Charger", "Cable", "Smart Watch",
];

const navLinks = [
  { label: "Home",        to: "/"        },
  { label: "Categories",  to: "/categories", dropdown: categories },
  { label: "About Us",    to: "/about"   },
  { label: "Contact Us",  to: "/contact" },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Header = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [catOpen,        setCatOpen]        = useState(false);
  const [mobileCatOpen,  setMobileCatOpen]  = useState(false);
  const catRef = useRef(null);

  const close = () => setMobileOpen(false);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) setCatOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const activeLinkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive ? "text-black border-b-2 border-black pb-0.5" : "text-gray-600 hover:text-black"
    }`;

  return (
    <>
      {/* ── Sticky header bar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 w-full" style={{ fontFamily: "'Poppins', sans-serif" }}>

        {/* Top Bar */}
        <div className="bg-black text-white text-xs py-2 px-5 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400 font-light tracking-wide mr-1">Follow us :</span>
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+917404458619" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200 tracking-wide">
              <PhoneIcon />
              <span>+91 74044 58619</span>
            </a>
            <span className="text-gray-700">|</span>
            <a href="mailto:nextwavemobile1@gmail.com" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200 tracking-wide">
              <EmailIcon />
              <span>nextwavemobile1@gmail.com</span>
            </a>
          </div>
          {/* Mobile: phone only */}
          <a href="tel:+917404458619" className="flex sm:hidden items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200">
            <PhoneIcon />
            <span>+91 74044 58619</span>
          </a>
        </div>

        {/* Main bar */}
        <div
          className={`bg-white border-b border-gray-200 px-5 md:px-10 py-3.5 flex items-center gap-6 transition-shadow duration-300 ${
            scrolled ? "shadow-md" : ""
          }`}
        >
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={vipinLogo} alt="Next Wave Technology" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 ml-6">
            {navLinks.map(({ label, to, dropdown }) =>
              dropdown ? (
                <div key={label} className="relative" ref={catRef}>
                  <button
                    onClick={() => setCatOpen((o) => !o)}
                    className="flex items-center gap-1 text-sm font-medium tracking-wide text-gray-600 hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    {label}
                    <span className={`transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}>
                      <ChevronDown />
                    </span>
                  </button>
                  {catOpen && (
                    <div className="absolute top-full left-0 mt-3 w-48 bg-white border border-gray-100 shadow-lg z-50">
                      {dropdown.map((cat) => (
                        <Link
                          key={cat}
                          to={`/categories/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setCatOpen(false)}
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-black hover:text-white transition-colors duration-150"
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={label} to={to} className={activeLinkClass}>
                  {label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex-1" />

          {/* Desktop CTA */}
          <a
            href="#"
            className="hidden md:inline-block bg-black text-white text-xs font-semibold tracking-widest uppercase px-6 py-2.5 hover:bg-gray-800 transition-colors duration-200 shrink-0"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Download Catalogue
          </a>

          {/* Hamburger — mobile only */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="flex md:hidden items-center justify-center text-gray-700 hover:text-black transition-colors ml-auto"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* ── Backdrop ──────────────────────────────────────────────────────── */}
      <div
        onClick={close}
        className={`fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Left Drawer ───────────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 flex flex-col shadow-2xl md:hidden transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <Link to="/" onClick={close}>
            <img src={vipinLogo} alt="Next Wave Technology" className="h-9 w-auto object-contain" />
          </Link>
          <button
            onClick={close}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors duration-200"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Nav links — scrollable */}
        <nav className="flex-1 overflow-y-auto px-5 py-2">
          {navLinks.map(({ label, to, dropdown }) =>
            dropdown ? (
              <div key={label} className="border-b border-gray-100">
                <button
                  onClick={() => setMobileCatOpen((o) => !o)}
                  className="w-full flex items-center justify-between py-4 text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {label}
                  <span className={`transition-transform duration-200 ${mobileCatOpen ? "rotate-180" : ""}`}>
                    <ChevronDown />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileCatOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-2 pl-3 border-l-2 border-black ml-1">
                    {dropdown.map((cat) => (
                      <Link
                        key={cat}
                        to={`/categories/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={close}
                        className="block py-2.5 px-3 text-sm text-gray-500 hover:text-black transition-colors"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={label}
                to={to}
                onClick={close}
                className={({ isActive }) =>
                  `block py-4 text-sm font-medium border-b border-gray-100 transition-colors ${
                    isActive ? "text-black font-semibold" : "text-gray-700 hover:text-black"
                  }`
                }
              >
                {label}
              </NavLink>
            )
          )}
        </nav>

        {/* Bottom section */}
        <div className="shrink-0 border-t border-gray-100 px-5 pt-4 pb-6 space-y-3">
          <a
            href="tel:+917404458619"
            className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors"
          >
            <PhoneIcon />
            +91 74044 58619
          </a>
          <a
            href="mailto:nextwavemobile1@gmail.com"
            className="flex items-center gap-3 text-sm text-gray-600 hover:text-black transition-colors"
          >
            <EmailIcon />
            nextwavemobile1@gmail.com
          </a>
          <a
            href="#"
            className="block w-full bg-black text-white text-xs font-semibold tracking-widest uppercase text-center py-3 mt-2 hover:bg-gray-800 transition-colors duration-200"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Download Catalogue
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
