import React from "react";
import HeroSwiper from "../components/HeroSwiper";
import MarqueeBanner from "../components/MarqueeBanner";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import HowToOrder from "../components/HowToOrder";
import WhyChooseUs from "../components/WhyChooseUs";
import ManufacturingBanner from "../components/ManufacturingBanner";
import CTABanners from "../components/CTABanners";
import FAQSection from "../components/FAQSection";
import ClientMarquee from "../components/ClientMarquee";

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
    <FAQSection />
    <ClientMarquee />
  </main>
);

export default Home;
