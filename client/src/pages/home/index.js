import HeroSection from "./HeroSection";
import GallerySection from "./GallerySection";
import AboutSection from "./AboutSection";
import PendingSection from "./PendingSection";
import PortfolioSection from "./PortfolioSection";

import ContactSection from "./ContactSection";
import BlogSection from "./BlogSection";

import useScrollToTop from "../../scrollTo/ScrollToTop";
import "../../styles/pages/home/home.css"

const Home = () => {
  useScrollToTop();

  return (
    <div className="wrapper">
      <div className="container">
        <HeroSection />
        <GallerySection title="Кейсы из портфолио" galleryType="Home" />
      </div>
      <AboutSection />
      <div className="container">
        <PendingSection />
        <PortfolioSection />
        <ContactSection title="У вас есть вопросы?" />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
