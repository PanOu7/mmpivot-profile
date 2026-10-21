import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesHeroSection from "../components/ServicesHeroSection";

const ServicesPage = () => {
  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <ServicesHeroSection />
      <Footer />
    </main>
  );
};

export default ServicesPage;
