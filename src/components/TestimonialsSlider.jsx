import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder",
    company: "TechNova Accessories",
    rating: 5,
    text: "Next Wave Technology has been a game-changer for our brand. The OEM service is seamless, quality is consistent, and delivery is always on time. Highly recommended for anyone looking to launch their own accessories line.",
  },
  {
    name: "Priya Mehta",
    role: "Procurement Head",
    company: "ZenMobile Retail",
    rating: 5,
    text: "We've been sourcing neckbands and chargers from them for over two years. The products are top-notch and their support team is always responsive. Best B2B supplier we've worked with.",
  },
  {
    name: "Aakash Verma",
    role: "E-Commerce Seller",
    company: "UrbanTech Store",
    rating: 5,
    text: "Flexible MOQs and fast turnaround make them ideal for online sellers like us. The custom branding on packaging looks premium and our customers love it.",
  },
  {
    name: "Sunita Joshi",
    role: "Director",
    company: "PrimeLine Distributors",
    rating: 5,
    text: "Their product range is massive and every item passes strict quality checks. We've scaled our distribution business 3× since partnering with Next Wave Technology.",
  },
  {
    name: "Vikram Patel",
    role: "CEO",
    company: "BrandX Solutions",
    rating: 5,
    text: "Excellent team, great products, and transparent pricing. From sample approval to bulk dispatch, the entire process is professional and efficient. Will continue working with them.",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} viewBox="0 0 24 24" className="w-4 h-4"
        fill={i < count ? "var(--nw-orange)" : "none"}
        stroke="var(--nw-orange)" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const TestimonialsSlider = () => (
  <section
    className="bg-white py-16 px-5 md:px-10"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 text-gray-400"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          What Our Partners Say
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight mb-4"
          style={{ fontFamily: "'Lato', sans-serif" }}>
          Client Testimonials
        </h2>
        <div className="flex justify-center">
          <div className="w-12 h-0.5" style={{ background: 'var(--nw-orange)' }} />
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        slidesPerView={1.25}
        spaceBetween={20}
        breakpoints={{
          768:  { slidesPerView: 2,   spaceBetween: 24 },
          1024: { slidesPerView: 3,   spaceBetween: 28 },
        }}
        className="testimonials-swiper"
        style={{ paddingBottom: "56px" }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} style={{ height: 'auto' }}>
            <div
              className="flex flex-col h-full px-7 py-8 bg-white"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                border: '1px solid #f0f0f0',
              }}
            >
              {/* Top row: big quote + stars */}
              <div className="flex items-start justify-between mb-1">
                <span
                  className="leading-none select-none"
                  style={{ fontSize: '64px', fontFamily: 'Georgia, serif', color: 'var(--nw-blue)', opacity: 0.15, lineHeight: 1 }}
                >
                  "
                </span>
                <Stars count={t.rating} />
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-7">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-black"
                  style={{ background: 'var(--nw-blue-dk)', fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-black font-bold text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {t.role} — {t.company}
                  </p>
                </div>
                <div className="ml-auto w-6 h-0.5 shrink-0" style={{ background: 'var(--nw-orange)' }} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  </section>
);

export default TestimonialsSlider;
