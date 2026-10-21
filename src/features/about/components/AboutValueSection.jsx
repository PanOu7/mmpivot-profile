"use client";

import Container from "@/components/Container";
import AboutCounterList from "./AboutCounterList";

const AboutValueSection = () => {

  return (
    <section className="mb-0 lg:mb-8">
      <Container>
        <div className=" border p-8 h-full flex flex-col items-center">
          <h3 className=" text-blue-600 text-2xl font-bold mb-2 font-heading">Our Values</h3>
          <p className=" w-full md:w-1/2 text-center mb-12 text-sm lg:text-base">
            To help all as much as we can especially among all stakeholders
            without any bias and discrimination while going to our business
            goal.
          </p>
          <div className=" w-full lg:w-2/3">
            <AboutCounterList />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutValueSection;
