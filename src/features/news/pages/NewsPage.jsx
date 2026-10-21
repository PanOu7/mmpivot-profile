"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsHeroSection from "../components/NewsHeroSection";
import { Suspense } from "react";

const NewsPage = () => {
  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <Suspense>
        <NewsHeroSection />
      </Suspense>
      <Footer />
    </main>
  );
};

export default NewsPage;
