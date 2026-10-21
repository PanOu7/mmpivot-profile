"use client";
import { MdLocationOn } from "react-icons/md";

import React from "react";
import { FaFacebook, FaLocationArrow, FaViber } from "react-icons/fa";
import Container from "@/components/Container";

const ContactAddressSection = () => {
  return (
    <section className="bg-blue-50  p-10 lg:p-20  ">
      <Container
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 `}
      >
        <div className="col-span-2 flex flex-col gap-2  ">
          <h3 className="font-semibold text-xl md:text-3xl lg:text-3xl">Get in touch</h3>

          <div className="mb-2">
            <p className="font-semibold text-base md:text-lg lg:text-xl">Address</p>
            <p className=" text-xs md:text-sm lg:text-base ">
              No (504/506 - 4th Floor), Corner of Merchant Road and 39th Street,
              Kyauktada Township, Yangon, Myanmar.
            </p>
          </div>
          <div>
            <p className="font-semibold text-base md:text-lg lg:text-xl">
              Phone :{" "}
              <span className="text-decoration-none  text-xs md:text-sm lg:text-base  text-blue-700 font-normal">
                <a href="tel:+95 9 977400971">
                  +95 9 977400971, +95 9 977400968, +95 9 977400989
                </a>
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-base md:text-lg lg:text-xl ">
              Mail :{" "}
              <span className="text-decoration-none  text-xs md:text-sm lg:text-base  text-blue-700 font-normal text-lowercase">
                <a href="mailto:info@mmpivot.com">info@mmpivot.com</a>
              </span>
            </p>
          </div>
        </div>

        <div className=" col-span-1  md:col-span-2  lg:col-span-3  lg:flex lg:justify-around md:flex gap-5  md:gap-20 lg:gap-0  ">
          <div className="md:mb-10 lg:mb-0 mb-10">
            <h3 className="font-semibold text-xl md:text-3xl lg:text-3xl mb-3 ">Contact Links</h3>
            <img
              src="https://mmpivot.com/front-web/img/qr.png"
              className="h-40  object-contain text-center"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <h3 className="font-semibold text-xl md:text-3xl lg:text-3xl">Social Media</h3>

            <div className="mb-2">
              <p className=" text-base md:text-lg lg:text-xl">Facebook Page</p>
              <p>
                <a
                  className="text-decoration-none"
                  target="_blank"
                  href="https://www.facebook.com/thaitechtalad"
                >
                  <span className="flex gap-2 items-center text-blue-700  text-xs md:text-sm lg:text-base ">
                    <FaFacebook className=" size-4" /> TDS Electronic Thailand
                  </span>
                </a>
              </p>
            </div>

            <div className="mb-2">
              <p className=" text-base md:text-lg lg:text-xl">Viber Number</p>
              <p>
                <a
                  className="text-decoration-none"
                  target="_blank"
                  href="tel:+95 9 977400971"
                >
                  <span className="flex gap-2 items-center text-blue-700  text-xs md:text-sm lg:text-base ">
                    <FaViber className=" size-4" /> +95 9 977400971
                  </span>
                </a>
              </p>
            </div>

            <div className="mb-2">
              <p className=" text-base md:text-lg lg:text-xl">Location Map</p>
              <p>
                <a
                  className="text-decoration-none"
                  target="_blank"
                  href="https://maps.app.goo.gl/nTJKkd1WVPwS7cpw9"
                >
                  <span className="flex gap-2 items-center text-blue-700  text-xs md:text-sm lg:text-base ">
                    <MdLocationOn className=" size-5" /> See Location
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactAddressSection;