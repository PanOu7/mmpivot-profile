"use client";

import Container from "@/components/Container";

const AboutCertificateSection = () => {
  return (
    <section className="mb-0 lg:mb-8">
      <Container>
        <div className=" border p-8 h-full flex flex-col items-center">
          <h3 className=" text-blue-600 text-2xl font-bold mb-5 font-heading">Our Certificates</h3>
          <div className=" grid  grid-cols-3 lg:grid-cols-7 ">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((num) => (
              <img key={num} className=" w-full" src={`/images/certificates/certificate${num}.jpg`} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCertificateSection;
