"use client";

import { LucideMail, LucidePhone } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import Link from "next/link";
import React from "react";
import Spacer from "./Spacer";
import Container from "./Container";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      href: "https://www.facebook.com/thaitechtalad",
      icon: <FaFacebook size="1.5em" />,
    },
    {
      id: 2,
      name: "Twitter",
      href: "https://x.com/thaitechtalad",
      icon: <FaTwitter size="1.5em" />,
    },
    {
      id: 3,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/thaitechtalad/",
      icon: <FaLinkedin size="1.5em" />,
    },
    {
      id: 4,
      name: "Line",
      href: "https://lin.ee/dxeALfh",
      icon: <SiLine size="1.5em" />,
    },
  ];
  const services = [
    { id: 1, href: "/", name: "Product design" },
    { id: 2, href: "/", name: "Web development" },
    { id: 3, href: "/", name: "Mobile Development" },
    { id: 4, href: "/", name: "Cloud Computing" },
    { id: 5, href: "/", name: "Technical Consultation" },
  ];

  const projects = [
    {
      id: 1,
      name: "AirPods Max",
      href: "https://demo-airpods-max.thaitechtalad.com",
    },
    {
      id: 2,
      name: "Motorbike Showroom",
      href: "https://demo-motorbike.thaitechtalad.com",
    },
    {
      id: 3,
      name: "Clothing Mockup Tool",
      href: "https://demo-clothing-mockup.thaitechtalad.com",
    },
  ];

  return (
    <>
      <footer className=" bg-blue-600 w-full mt-auto relative bottom-0 p">
        <div className=" px-3 pt-7 lg:px-0">
          <Container className=" grid lg:grid-cols-5 py-12  grid-cols-1 gap-x-5 gap-y-10 lg:gap-10 lg:py-12">
            <div className=" lg:col-span-2 col-span-full flex flex-col gap-3 ">
              <div className="lg:text-xl flex items-center justify-start cursor-pointer gap-2 font-semibold -mb-3">
                <img
                  className="h-20 mb-3 bg-white p-2"
                  src="/images/logo.png"
                  alt="MMPivot Logo"
                />
              </div>
              <p className=" text-sm text-white w-80">
                Transforming concepts into tangible success and making your
                project a remarkable achievement.
              </p>
              <div className=" space-x-2">
                {socialLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-blue-100 hover:bg-blue-100 hover:text-blue-700 duration-300 hover:-translate-y-1 hover:scale-110 focus:outline-none focus:bg-blue-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className=" col-span-full lg:col-span-3 justify-end lg:flex grid grid-cols-2 gap-[50px]">
              <div className=" space-y-5">
                <p className=" text-white font-bold">
                  Our Services
                </p>
                <div className=" space-y-3  lg:text-sm capitalize">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className=" border-s-2 border-gray-200 ps-2 block text-blue-100 text-sm text-nowrap  cursor-pointer hover:bg-blue-800 duration-300"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className=" space-y-5">
                <p className="  text-white font-bold">
                  Demo Projects
                </p>
                <div className=" space-y-3  lg:text-sm capitalize">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      href={project.href}
                      className=" border-s-2 border-gray-200 ps-2 block text-blue-100 text-sm text-nowrap  cursor-pointer hover:bg-blue-800 duration-300"
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className=" col-span-full">
                <p className="  font-bold text-white mb-4">
                  Contact Us
                </p>
                <div className=" flex  items-center gap-3 mb-5">
                  <div className=" size-10 p-1 rounded-full bg-white flex justify-center items-center">
                    <LucideMail className=" text-blue-600" size={16} />
                  </div>
                  <div className=" text-sm ">
                    <p className=" text-white">Email Account</p>
                    <a className=" block text-blue-100" href="mailto:thaitechtalad@gmail.com">
                      thaitechtalad@gmail.com
                    </a>
                  </div>
                </div>
                <div className=" flex  items-center gap-3">
                  <div className=" size-10 p-1 rounded-full bg-white flex justify-center items-center">
                    <LucidePhone className=" text-blue-600" size={16} />
                  </div>
                  <div className=" text-sm text-blue-100">
                    <p className=" text-white">Phone Number</p>
                    <Link className=" block text-blue-100" href="tel:+66 95 990 5577">
                      +66 95 990 5577
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <p className="  text-white text-center bg-blue-700 p-5 mt-10">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href={`https://mmpivot.com`} className=" font-semibold ">
              Myanma Pivot
            </Link>
            <br className=" block md:hidden" /> All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
