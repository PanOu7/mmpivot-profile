"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutValueSection from "../components/AboutValueSection";
import AboutCertificateSection from "../components/AboutCertificateSection";
import AboutMemberSection from "../components/AboutMemberSection";
import AboutPartnerSection from "../components/AboutPartnerSection";
import Spacer from "@/components/Spacer";

const AboutPage = () => {
  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <Spacer className={`h-8`} />
      <AboutHeroSection />
      <AboutValueSection />
      <AboutCertificateSection />
      <AboutMemberSection />
      <AboutPartnerSection />
      <Footer />
    </main>
  );;
};

export default AboutPage;
