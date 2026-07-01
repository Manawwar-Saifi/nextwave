import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const faqs = [
  {
    q: "What products does Next Wave Technology supply?",
    intro: "We supply a wide range of mobile accessories including:",
    list: [
      "Mobile Chargers & Adapters",
      "Neckband Bluetooth Earphones",
      "TWS (True Wireless Stereo) Earbuds",
      "Wired Earphones & Handsfree",
      "USB Data & Charging Cables",
      "Power Banks",
      "Smart Watches",
      "OTG Cables & Accessories",
    ],
  },
  {
    q: "Can I start my own brand with your OEM / ODM services?",
    text: "Yes. We provide complete OEM & ODM solutions — product sourcing, custom packaging, logo branding, and doorstep delivery — so you can launch your own mobile accessories brand effortlessly.",
  },
  {
    q: "What is your minimum order quantity (MOQ)?",
    intro: "MOQ varies by product category. General guidelines:",
    list: [
      "Cables — 5,000 units",
      "Chargers — 3,000 units",
      "Neckbands / TWS — 1,000 units",
      "Power Banks / Smart Watches — 500 units",
    ],
    footer: "For custom branding, MOQ may differ based on your design requirements.",
  },
  {
    q: "Can I get my logo printed on the products and packaging?",
    text: "Absolutely. We offer full customisation including logo printing directly on products and custom-designed retail packaging to match your brand identity.",
  },
  {
    q: "How long does it take to fulfill a bulk order?",
    text: "The average production and delivery time is between 15 to 30 days, depending on the order quantity and level of customisation required.",
  },
  {
    q: "Do you provide samples before placing a bulk order?",
    text: "Yes. We can provide product samples so you can evaluate quality, design, and performance before committing to a bulk order. Sample charges apply.",
  },
  {
    q: "What types of clients do you work with?",
    intro: "We work with a wide range of clients including:",
    list: [
      "Startups launching their own mobile accessories brand",
      "Established brands looking for reliable OEM partners",
      "Wholesalers & Distributors",
      "E-commerce Sellers",
      "Corporate Gifting Companies",
    ],
  },
  {
    q: "Are your products certified and quality tested?",
    text: "All products undergo strict quality checks and comply with necessary certifications including BIS to ensure safety and performance before dispatch.",
  },
  {
    q: "Do you deliver products outside India?",
    text: "Currently we deliver within India only. Our logistics network is optimised for fast and reliable delivery across all Indian states.",
  },
  {
    q: "How do I place an order or get a quote?",
    text: "Simply reach out via our Contact page, WhatsApp, or email with your product requirements, quantity, and branding preferences. Our team will respond with a detailed quote within 24 hours.",
  },
];

/* ── Chevron icon ─────────────────────────────────────────────────────────── */
const Chevron = ({ open }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0 transition-transform duration-300"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ── FAQ Item ─────────────────────────────────────────────────────────────── */
const FAQItem = ({ faq, index, open, toggle }) => (
  <div
    className="border border-gray-200 mb-3"
    data-aos="fade-up"
    data-aos-delay={Math.min(index * 50, 300)}
  >
    {/* Question row */}
    <button
      onClick={toggle}
      className={`w-full flex items-center justify-between gap-4 text-left px-5 py-4 transition-colors duration-200 ${
        open ? "text-white" : "bg-white text-black hover:bg-gray-50"
      }`}
      style={open ? { background: 'var(--nw-navy)' } : {}}
      aria-expanded={open}
    >
      <span
        className="font-semibold text-sm leading-snug"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {faq.q}
      </span>
      <Chevron open={open} />
    </button>

    {/* Answer panel */}
    {open && (
      <div
        className="px-5 py-5 bg-white border-t border-gray-100"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {faq.intro && (
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{faq.intro}</p>
        )}
        {faq.list && (
          <ul className="space-y-1.5 mb-3">
            {faq.list.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--nw-blue)' }} />
                {item}
              </li>
            ))}
          </ul>
        )}
        {faq.text && (
          <p className="text-sm text-gray-600 leading-relaxed">{faq.text}</p>
        )}
        {faq.footer && (
          <p className="text-xs text-gray-400 mt-3 leading-relaxed">{faq.footer}</p>
        )}
      </div>
    )}
  </div>
);

/* ── Section ──────────────────────────────────────────────────────────────── */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="bg-gray-50 py-16 px-5 md:px-10"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p
            className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Got Questions?
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="flex justify-center">
            <div className="w-12 h-0.5" style={{ background: 'var(--nw-orange)' }} />
          </div>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              open={openIndex === i}
              toggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center" data-aos="fade-up">
          <p className="text-sm text-gray-500 mb-4">
            Still have questions? We're happy to help.
          </p>
          <NavLink
            to="/contact"
            className="inline-block text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:opacity-90 active:scale-95 transition-all duration-200"
            style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
          >
            Contact Us
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
