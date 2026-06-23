import React from "react";

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, such as your name, email address, phone number, and company details when you fill out a contact form or place a business enquiry. We may also collect usage data such as browser type and pages visited.",
  },
  {
    title: "How We Use Your Information",
    body: "Your information is used solely to respond to enquiries, process business orders, send product catalogues, and improve our services. We do not use your data for unsolicited marketing without your consent.",
  },
  {
    title: "Data Sharing",
    body: "We do not sell, trade, or transfer your personal information to third parties. Information may be shared with trusted partners strictly necessary to fulfil your order or enquiry, under confidentiality obligations.",
  },
  {
    title: "Data Security",
    body: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies to enhance user experience. You can instruct your browser to refuse cookies, though some parts of the site may not function correctly without them.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, contact us at nextwavemobile1@gmail.com.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the revised policy.",
  },
];

const PrivacyPolicy = () => (
  <main style={{ fontFamily: "'Poppins', sans-serif" }}>

    {/* Hero */}
    <section className="bg-black text-white py-20 px-5 text-center">
      <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-3">Legal</p>
      <h1
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        Privacy Policy
      </h1>
      <p className="text-gray-400 text-sm">Effective Date: January 1, 2024</p>
    </section>

    {/* Content */}
    <section className="bg-white py-16 px-5">
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 text-sm leading-relaxed mb-10 pb-10 border-b border-gray-100">
          Next Wave Technology ("we", "our", or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard the information you
          provide when visiting our website or doing business with us.
        </p>

        <div className="space-y-8">
          {sections.map(({ title, body }, i) => (
            <div key={title}>
              <h2
                className="text-sm font-bold uppercase tracking-widest text-black mb-3"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {i + 1}. {title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            For any questions regarding this Privacy Policy, contact us at{" "}
            <a href="mailto:nextwavemobile1@gmail.com" className="text-black underline">
              nextwavemobile1@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+917404458619" className="text-black underline">
              +91 74044 58619
            </a>.
          </p>
        </div>
      </div>
    </section>

  </main>
);

export default PrivacyPolicy;
