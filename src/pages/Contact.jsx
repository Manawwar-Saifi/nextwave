import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const mailto = `mailto:nextwavemobile1@gmail.com?subject=${encodeURIComponent(subject || "Enquiry from " + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <main style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* Hero */}
      <section className="bg-black text-white py-20 px-5 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-3">Get In Touch</p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Contact Us
        </h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Have a bulk enquiry, white-label request, or product question? We'd love to hear from you.
        </p>
      </section>

      {/* Form + Details */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Form */}
          <div>
            <h2
              className="text-lg font-bold uppercase tracking-widest text-black mb-7"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Your Name</label>
                  <input
                    type="text" name="name" required value={form.name} onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-black outline-none focus:border-black transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Email Address</label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-black outline-none focus:border-black transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Subject</label>
                <input
                  type="text" name="subject" value={form.subject} onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-black outline-none focus:border-black transition-colors duration-200"
                  placeholder="Bulk Order Enquiry"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  name="message" required value={form.message} onChange={handleChange} rows={6}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-black outline-none focus:border-black transition-colors duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white text-xs font-bold tracking-widest uppercase px-8 py-3 hover:bg-gray-900 active:scale-95 transition-all duration-200 cursor-pointer"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2
              className="text-lg font-bold uppercase tracking-widest text-black mb-7"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Reach Us Directly
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 border border-gray-200 p-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5 text-black">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                  <a href="tel:+917404458619" className="text-sm font-semibold text-black hover:underline">+91 74044 58619</a>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-gray-200 p-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5 text-black">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                  <a href="mailto:nextwavemobile1@gmail.com" className="text-sm font-semibold text-black hover:underline break-all">
                    nextwavemobile1@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-gray-200 p-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5 text-black">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Address</p>
                  <p className="text-sm font-semibold text-black">Your City, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4 border border-gray-200 p-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5 text-black">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Business Hours</p>
                  <p className="text-sm font-semibold text-black">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;
