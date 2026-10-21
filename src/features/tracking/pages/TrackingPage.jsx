"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TrackingHeroSection from "../components/TrackingHeroSection";
import Spacer from "@/components/Spacer";

const TrackingPage = () => {
  return (
    <>
      <Header />
      <Spacer className={`h-8`} />
      <TrackingHeroSection />
      <Footer />
    </>
  );;
};

export default TrackingPage;
