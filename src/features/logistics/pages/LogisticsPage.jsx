"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogisticsHeroSection from "../components/LogisticsHeroSection";
import Spacer from "@/components/Spacer";
import LogisticsImageSection from "../components/LogisticsImageSection";

const LogisticsPage = () => {
  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <Spacer className={`h-8`} />
      <LogisticsHeroSection />
      <LogisticsImageSection />

      <Footer />
    </main>
  );
};

export default LogisticsPage;
