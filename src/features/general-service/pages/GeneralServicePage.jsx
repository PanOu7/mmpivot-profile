"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GeneralServiceHeroSection from "../components/GeneralServiceHeroSection";
import Spacer from "@/components/Spacer";

const GeneralServicePage = () => {
  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <Spacer className={`h-8`} />
      <GeneralServiceHeroSection />
      <Footer />
    </main>
  );
};

export default GeneralServicePage;
