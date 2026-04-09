import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import ResultsSection from "@/components/ResultsSection";
import VisualSection from "@/components/VisualSection";
import TechSection from "@/components/TechSection";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <HowItWorksSection />
    <VisualSection />
    <FeaturesSection />
    <ResultsSection />
    <TechSection />
    <FutureSection />
    <Footer />
  </div>
);

export default Index;
