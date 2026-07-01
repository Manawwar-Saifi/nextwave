import React from "react";

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the Next Wave Technology website, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our website or services.",
  },
  {
    title: "Use of Website",
    body: "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not use this site to transmit any harmful, offensive, or unauthorised content.",
  },
  {
    title: "Products & Services",
    body: "All products listed on this website are intended for B2B (business-to-business) transactions. Product availability, pricing, and specifications are subject to change without prior notice. Final pricing is confirmed upon order placement.",
  },
  {
    title: "Orders & Payments",
    body: "Orders are confirmed only upon receipt of written confirmation from Next Wave Technology. Payment terms are agreed upon individually for each business partner. We reserve the right to cancel any order due to product unavailability or pricing errors.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website, including but not limited to text, graphics, logos, and images, is the property of Next Wave Technology and protected under applicable intellectual property laws. Reproduction without prior written consent is prohibited.",
  },
  {
    title: "White-Label & OEM Terms",
    body: "White-label and OEM services are governed by separate agreements signed between Next Wave Technology and the client. These Terms & Conditions apply in addition to, and do not supersede, such agreements.",
  },
  {
    title: "Limitation of Liability",
    body: "Next Wave Technology shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our total liability shall not exceed the value of the specific order in question.",
  },
  {
    title: "Governing Law",
    body: "These Terms & Conditions are governed by the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of the state in which Next Wave Technology is registered.",
  },
  {
    title: "Changes to Terms",
    body: "We reserve the right to update these Terms & Conditions at any time. Changes will be effective immediately upon posting. It is your responsibility to review these terms periodically.",
  },
];

const Terms = () => (
  <main style={{ fontFamily: "'Poppins', sans-serif" }}>

    {/* Breadcrumb */}
    <section className="py-5 px-5 text-center border-b border-gray-200" style={{ background: '#EBF5FC' }}>
      <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: 'var(--nw-blue)' }}>Legal</p>
      <h1
        className="text-2xl md:text-3xl font-bold mb-1"
        style={{ fontFamily: "'Lato', sans-serif", color: 'var(--nw-navy)' }}
      >
        Terms & Conditions
      </h1>
      <p className="text-gray-500 text-xs">Effective Date: January 1, 2024</p>
    </section>

    {/* Content */}
    <section className="bg-white py-16 px-5">
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 text-sm leading-relaxed mb-10 pb-10 border-b border-gray-100">
          Please read these Terms & Conditions carefully before using the Next Wave Technology
          website or engaging our services. These terms outline the rules and regulations
          governing the use of our website and business services.
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
            For any questions regarding these Terms & Conditions, contact us at{" "}
            <a href="mailto:nextwavemobile1@gmail.com" style={{ color: 'var(--nw-blue)' }} className="underline">
              nextwavemobile1@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+917404458619" style={{ color: 'var(--nw-blue)' }} className="underline">
              +91 74044 58619
            </a>.
          </p>
        </div>
      </div>
    </section>

  </main>
);

export default Terms;
