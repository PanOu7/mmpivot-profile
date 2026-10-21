"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TradingHeroSection from "../components/TradingHeroSection";
import Spacer from "@/components/Spacer";

const TradingPage = () => {
  return (
    <>
      <Header />
      <Spacer className={`h-8`} />
      <TradingHeroSection />
      <Footer />
    </>
  );;
};

export default TradingPage;
