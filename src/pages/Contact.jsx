import React, { useState } from "react";

const ENQUIRY_TYPES = [
  "Bulk Order Enquiry",
  "White-Label / OEM Request",
  "Product Catalogue",
  "Custom Branding",
  "Pricing & MOQ",
  "General Query",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, subject, message } = form;
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:nextwavemobile1@gmail.com?subject=${encodeURIComponent(subject || "Enquiry from " + name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── Breadcrumb strip — compact ── */}
      <section className="py-5 px-5 md:px-10 border-b border-gray-200" style={{ background: '#EBF5FC' }}>
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--nw-blue)' }}
          >
            Get In Touch
          </p>
          <span className="text-gray-300 text-xs">›</span>
          <h1
            className="text-xs font-black uppercase tracking-widest"
            style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--nw-navy)' }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* ── Main split ── */}
      <section className="bg-white mt-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5">

          {/* ── Left: Info panel ── */}
          <div className="lg:col-span-2 px-8 md:px-10 py-12 flex flex-col gap-10" style={{ background: '#EBF5FC' }}>

            <div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reach out for bulk orders, white-label packaging, product
                catalogues, or any business enquiry. We respond within 24 hours.
              </p>
            </div>

            {/* Contact items */}
            <div className="space-y-7">
              <a href="tel:+917404458619" className="flex items-start gap-4 group">
                <span className="w-8 h-8 border border-(--nw-blue)/30 flex items-center justify-center shrink-0 group-hover:border-(--nw-blue) transition-colors duration-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Phone</p>
                  <p className="text-sm font-semibold transition-colors" style={{ color: 'var(--nw-navy)' }}>+91 74044 58619</p>
                </div>
              </a>

              <a href="mailto:nextwavemobile1@gmail.com" className="flex items-start gap-4 group">
                <span className="w-8 h-8 border border-(--nw-blue)/30 flex items-center justify-center shrink-0 group-hover:border-(--nw-blue) transition-colors duration-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</p>
                  <p className="text-sm font-semibold break-all transition-colors" style={{ color: 'var(--nw-navy)' }}>nextwavemobile1@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="w-8 h-8 border border-(--nw-blue)/30 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Address</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--nw-navy)' }}>Sector 14, Sonipat</p>
                  <p className="text-sm text-gray-500">Haryana – 131001, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-8 h-8 border border-(--nw-blue)/30 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-0.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Business Hours</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--nw-navy)' }}>Mon – Sat</p>
                  <p className="text-sm text-gray-500">9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917404458619"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-(--nw-blue)/30 px-5 py-3 hover:border-(--nw-blue) transition-colors duration-200 group w-fit"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-(--nw-blue)/60 group-hover:text-(--nw-blue) transition-colors">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-(--nw-blue) transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                WhatsApp Us
              </span>
            </a>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3 px-8 md:px-12 py-12">
            <h2
              className="text-xs font-bold uppercase tracking-widest text-black mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Send an Enquiry
            </h2>

            {sent ? (
              <div className="border border-(--nw-blue) p-8 text-center">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 mx-auto mb-4" style={{ stroke: 'var(--nw-orange)' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p className="text-sm font-semibold text-black mb-1">Message sent!</p>
                <p className="text-xs text-gray-500">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Full Name <span style={{ color: 'var(--nw-orange)' }}>*</span>
                    </label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className="border-b border-gray-200 py-2.5 text-sm text-black outline-none focus:border-(--nw-blue) transition-colors duration-200 bg-transparent placeholder:text-gray-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="border-b border-gray-200 py-2.5 text-sm text-black outline-none focus:border-(--nw-blue) transition-colors duration-200 bg-transparent placeholder:text-gray-300"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Email Address <span style={{ color: 'var(--nw-orange)' }}>*</span>
                  </label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder="rahul@yourbusiness.com"
                    className="border-b border-gray-200 py-2.5 text-sm text-black outline-none focus:border-black transition-colors duration-200 bg-transparent placeholder:text-gray-300"
                  />
                </div>

                {/* Row 3 — Subject dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Enquiry Type
                  </label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange}
                    className="border-b border-gray-200 py-2.5 text-sm text-black outline-none focus:border-(--nw-blue) transition-colors duration-200 bg-transparent appearance-none cursor-pointer"
                  >
                    <option value="">Select a topic...</option>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Row 4 — Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest text-gray-400" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Message <span style={{ color: 'var(--nw-orange)' }}>*</span>
                  </label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange} rows={5}
                    placeholder="Tell us about your requirements — product type, quantity, branding needs..."
                    className="border-b border-gray-200 py-2.5 text-sm text-black outline-none focus:border-(--nw-blue) transition-colors duration-200 bg-transparent resize-none placeholder:text-gray-300"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-gray-400">* Required fields</p>
                  <button
                    type="submit"
                    className="text-white text-xs font-bold tracking-widest uppercase px-8 py-3.5 hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer"
                    style={{ background: 'var(--nw-orange)', fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── Map strip ── */}
      <section className="h-72 w-full grayscale mt-8 mb-8">
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
      </section>

    </main>
  );
};

export default Contact;
