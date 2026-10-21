"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ConstructionHeroSection from "../components/ConstructionHeroSection";
import Spacer from "@/components/Spacer";
import ConstructorImageSection from "../components/ConstructorImageSection";
import ConstructionTags from "../components/ConstructionTags";

const ConstructionPage = () => {
  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <Spacer className={`h-8`} />
      <ConstructionHeroSection />
      <Footer />
    </main>
  );
};

export default ConstructionPage;
