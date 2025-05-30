import HeroSection from "../../components/hero-section/HeroSection";
import Container from "../../components/container/Container";
import Partners from "../../components/partners/Partners";
import FeatureSection from "../../components/features-scetion/FeatureSection";
import FAQ from "../../components/Faq/Faq";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page-wrapper">
        <HeroSection />
        <Container>
          <Partners />
          <FeatureSection />
        </Container>
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
