"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductDetailSection from "../components/ProductDetailSection";

const ProductDetailPage = () => {
  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <ProductDetailSection />
      <Footer />
    </main>
  );
};

export default ProductDetailPage;
