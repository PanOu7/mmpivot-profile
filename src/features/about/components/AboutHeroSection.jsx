"use client";

import Container from "@/components/Container";

const AboutHeroSection = () => {
  return (
    <section className="mb-0 lg:mb-8">
      <Container className={` grid lg:grid-cols-5 grid-cols-1 gap-0 lg:gap-8`}>
        <div className=" col-span-3">
          <div className=" border p-8 h-full">
            <h3 className=" text-blue-600 text-2xl font-bold mb-2 font-heading">
              About Us
            </h3>
            <p className=" text-sm lg:text-base">
              Myanma Pivot Group of Companies, located in Yangon, Myanmar,
              operates primarily in Construction, Manufacturing, Logistics, and
              General Services. The term "pivot" signifies a crucial element in
              a situation or system upon which other elements depend. Similarly,
              we aim to be a pivotal partner or service provider essential to
              your business's success.
            </p>
          </div>
        </div>
        <div className=" col-span-2 row-span-2">
          <div className=" border p-8 h-full flex flex-col items-center">
            <img src="/images/main-logo.png" className=" h-44 mb-5" alt="" />
            <p className=" text-center text-sm lg:text-base">
              Yellow color in our logo represents optimism and loyalty. Green
              color in our logo represents growth, harmony, freshness, safety.
              Red color in our logo represents power and courage.
            </p>
          </div>
        </div>
        <div className=" col-span-3">
          <div className=" border p-8 h-full">
            <h3 className=" text-blue-600 text-2xl font-bold mb-2 font-heading">
              Career with us
            </h3>
            <p className="text-sm lg:text-base">
              Myanma Pivot pay attention to contribute the well-being of
              employee’s current work-life balance, as well as after retired
              life. We establish the environment with equal right without any
              bias for our employee’s career ladder. We recognize that the
              empowerment is one of the critical factor of business success. So,
              every employees in our company are empowered as needed with
              training with reliable technics. And we nurture to gain as
              employee’s mind set to be able to cope with in any situation
            </p>
          </div>
        </div>
        <div className=" col-span-2 ">
          <div className=" border p-8 h-full">
            <h3 className=" text-blue-600 text-2xl font-bold mb-2 font-heading">
              Our Vision
            </h3>
            <ul className="text-sm lg:text-base list-disc">
              <li>
                To enhance the quality of life for the people of Myanmar by
                delivering high-quality products and excellent services.
              </li>
              <li>
                To embrace trust, teamwork, diversity and relationships that are
                mutually beneficial.
              </li>
            </ul>
          </div>
        </div>
        <div className=" col-span-3">
          <div className=" border p-8 h-full">
            <h3 className=" text-blue-600 text-2xl font-bold mb-2 font-heading">
              Career Mission
            </h3>
            <ul className="text-sm lg:text-base list-disc">
              <li>
                To excel in our industries by consistently delivering top-tier
                quality products and services to our customers.
              </li>
              <li>
                To offer more than just products; we provide solutions that help
                save time and promote health.
              </li>
              <li>
                To enhance the Gross National Product of the state through
                increasing exports.
              </li>
              <li>
                To establish ourselves as the producer of Electric Kitchenware,
                household appliances, and home decoration materials labeled as
                "Made in Myanmar."
              </li>
              <li>
                To establish a supportive workplace for our talented employees
                and colleagues, and improve the quality of life for employees
                after retirement.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHeroSection;
