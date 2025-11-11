import { useState } from "react";
import HeroSection from "./HeroSection";
import SocialProofSection from "./SocialProofSection";
import BenefitsSection from "./BenefitsSection";
import ServicesSection from "./ServicesSection";
import TrustSection from "./TrustSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import ConsultationForm from "./ConsultationForm";
import StickyMobileCTA from "./StickyMobileCTA";

function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCTAClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection onCTAClick={handleCTAClick} />
      <SocialProofSection />
      <BenefitsSection />
      <ServicesSection />
      <TrustSection />
      <CTASection onCTAClick={handleCTAClick} />
      <Footer onCTAClick={handleCTAClick} />
      
      <ConsultationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
      <StickyMobileCTA onCTAClick={handleCTAClick} />
    </div>
  );
}

export default Home;