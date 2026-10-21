import Container from "@/components/Container";
import { fetchService } from "@/services/service";
import ServiceCard from "./ServiceCard";

const ServicesHeroSection = async () => {
  const res = await fetchService();
  const services = await res.json();

  return (
    <section className=" py-10">
      <Container>
        <h1 className="text-2xl sm:text-3xl font-semibold font-heading mb-10">
          Our Services
        </h1>
        <div className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesHeroSection;
