"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ManufacturingHeroSection from "../components/ManufacturingHeroSection";
import Spacer from "@/components/Spacer";

const ManufacturingPage = () => {
  return (
    <>
      <main className="flex flex-col min-h-svh">
        <Header />
        <Spacer className={`h-8`} />
        <ManufacturingHeroSection />
        <Footer />
      </main>
    </>
  );
};

export default ManufacturingPage;
