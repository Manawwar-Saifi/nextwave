import React from "react";
import HeroSwiper from "../components/HeroSwiper";
import MarqueeBanner from "../components/MarqueeBanner";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import HowToOrder from "../components/HowToOrder";
import WhyChooseUs from "../components/WhyChooseUs";
import ManufacturingBanner from "../components/ManufacturingBanner";
import CTABanners from "../components/CTABanners";
import ClientMarquee from "../components/ClientMarquee";
import TestimonialsSlider from "../components/TestimonialsSlider";
import FAQSection from "../components/FAQSection";

const Home = () => (
  <main>
    <HeroSwiper />
    <MarqueeBanner />
    <CategorySection />
    <WhyChooseUs />
    <CTABanners />
    <FeaturedProducts />
    <HowToOrder />
    <ManufacturingBanner />
    <ClientMarquee />
    <TestimonialsSlider />
    <FAQSection />
  </main>
);

export default Home;
