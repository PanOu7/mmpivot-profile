import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactHeroSection from "../components/ContactHeroSection";
import ContactAddressSection from "../components/ContactAddressSection";

const ContactPage = () => {
  return (
    <main className="flex flex-col min-h-svh">
      <Header />
      <ContactHeroSection />
      <ContactAddressSection />
      <Footer />
    </main>
  );
};

export default ContactPage;
