"use client";

import Container from "@/components/Container";
import { Send } from "lucide-react";

const ContactHeroSection = () => {
  return (
    <section className=" py-10">
      <Container>
        <div className="flex flex-col px-5 lg:px-0">
          {/* Header */}
          <div className=" text-start lg:text-center mb-5 lg:mb-10  gap-3">
            <h3 className="text-2xl sm:text-3xl font-semibold">Contact Us</h3>
            <p className="text-gray-500 text-base sm:text-lg">
              Get in touch now for swift, top-quality service!
            </p>
          </div>
          {/* Map and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Map */}
            <div className=" order-2 lg:order-1 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61121.58273309562!2d96.12204033402658!3d16.771753407427422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed002bf9eee5%3A0x77e5c33b32d512f!2sMyanma%20Pivot%20Group%20of%20Companies!5e0!3m2!1sen!2smm!4v1751218520684!5m2!1sen!2smm"
                className="w-full h-full shadow-sm"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Form */}
            <form className=" order-1 lg:order-2 space-y-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 dark:bg-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors"
              >
                <Send />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHeroSection;
