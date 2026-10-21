import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductSection from "../components/ProductSection";
import { Suspense } from "react";

const ProductPage = () => {
  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <Suspense>
        <ProductSection />
      </Suspense>
      <Footer />
    </main>
  );
};

export default ProductPage;
