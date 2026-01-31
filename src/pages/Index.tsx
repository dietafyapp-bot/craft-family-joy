import PromoHeader from "@/components/PromoHeader";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import EducationalBenefits from "@/components/EducationalBenefits";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CategoriesSection from "@/components/CategoriesSection";
import SocialProofSection from "@/components/SocialProofSection";
import PackagesSection from "@/components/PackagesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <PromoHeader />
      <HeroSection />
      <ShowcaseSection />
      <CTASection />
      <BenefitsSection />
      <ProductSection />
      <EducationalBenefits />
      <BonusSection />
      <TestimonialsSection />
      <CategoriesSection />
      <SocialProofSection />
      <PackagesSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
