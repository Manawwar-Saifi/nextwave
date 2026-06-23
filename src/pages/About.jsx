import React from "react";
import { NavLink } from "react-router-dom";

const stats = [
  { value: "3+",    label: "Years in Market"      },
  { value: "500+",  label: "Products Delivered"   },
  { value: "200+",  label: "Business Partners"    },
  { value: "15+",   label: "Product Categories"   },
];

const values = [
  {
    title: "Quality First",
    desc: "Every product undergoes strict quality checks before dispatch. We partner only with certified manufacturers.",
  },
  {
    title: "Speed & Reliability",
    desc: "Timely delivery is non-negotiable. We maintain ready inventory to fulfil bulk orders without delays.",
  },
  {
    title: "White-Label Ready",
    desc: "Custom branding on packaging and products — your brand, our manufacturing expertise behind it.",
  },
];

const About = () => (
  <main style={{ fontFamily: "'Poppins', sans-serif" }}>

    {/* Hero */}
    <section className="bg-black text-white py-20 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-3"
          style={{ fontFamily: "'Poppins', sans-serif" }}>
          Who We Are
        </p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-5"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          About Next Wave Technology
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          A trusted B2B supplier of premium mobile accessories — powering businesses
          across India with OEM and ODM solutions since 2021.
        </p>
      </div>
    </section>

    {/* Story + Stats */}
    <section className="bg-white py-16 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-2xl md:text-3xl font-bold text-black mb-5"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Our Story
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Next Wave Technology was founded with a single mission — to make high-quality
            mobile accessories accessible to every business, regardless of size. Starting
            with a small catalogue, we have grown into one of India's reliable white-label
            suppliers serving retailers, distributors, and brands nationwide.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            With over 3 years of experience and a steadily growing product portfolio
            spanning neckbands, TWS earbuds, chargers, cables, power banks, and smart
            watches, we continue to expand our reach while maintaining the quality our
            partners depend on.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {stats.map(({ value, label }) => (
            <div key={label} className="border border-gray-200 p-6 hover:border-black transition-colors duration-200">
              <p
                className="text-3xl font-black text-black mb-1"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {value}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-gray-50 py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold text-black mb-10 text-center"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          What Drives Us
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ title, desc }) => (
            <div key={title} className="bg-white border border-gray-200 p-8 hover:border-black transition-colors duration-200">
              <h3
                className="text-sm font-bold uppercase tracking-widest text-black mb-3"
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

    {/* CTA */}
    <section className="bg-black text-white py-14 px-5 text-center">
      <h2
        className="text-2xl md:text-3xl font-bold mb-4"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        Ready to Partner With Us?
      </h2>
      <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
        Get in touch to discuss bulk orders, white-label packaging, or product catalogues.
      </p>
      <NavLink
        to="/contact"
        className="inline-block bg-white text-black text-xs font-bold tracking-widest uppercase px-8 py-3 hover:bg-gray-200 transition-colors duration-200"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Contact Us
      </NavLink>
    </section>

  </main>
);

export default About;
