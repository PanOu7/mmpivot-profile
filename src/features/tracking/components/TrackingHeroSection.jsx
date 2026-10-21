"use client";
import Container from "@/components/Container";
import { FaSearch } from "react-icons/fa";
const TrackingHeroSection = () => {
  return (
    <section className="">
      <Container>
        <div className="">
          <div className="flex  justify-center">
            <div className="w-full lg:w-5/12">
              <div className="text-center my-10">
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  Track Your Job?
                </h3>
                <p className="text-gray-500 text-base sm:text-lg">
                  Enter your tracking code to easily view the status of your
                  completed work!
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <form action="https://tracking.mmpivot.com/result">
              <div className="flex flex-wrap  justify-center gap-2">
                <div className="flex md:flex-row flex-col   gap-2  justify-center items-center">
                  <div className="">
                    <input
                      type="text"
                      name="code"
                      id="key"
                      placeholder="Put Tracking Code"
                      required
                      className=" border border-gray-300  w-64 md:w-72 px-3 h-10 uppercase"
                    />
                  </div>
                  <div className=" ">
                    <button className=" bg-blue-600 hover:bg-blue-700 text-white w-34 md:w-42 h-10  font-semibold flex items-center justify-center">
                      <FaSearch className="" />
                      <span className="hidden md:inline ml-2">Find now</span>
                    </button>
                  </div>
                </div>
                <div className="w-full text-center mt-3">
                  <small className="font-bold text-gray-500 md:text-lg">
                    Enter the tracking code
                  </small>
                </div>
              </div>
            </form>
          </div>

          {/* to show result here */}
          <div className="w-full overflow-x-auto">
            <div className="result"></div>
          </div>
        </div>

        <div className="bg-blue-50 min-h-[70vh] flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-around mt-10 space-y-10 md:space-y-0">
            <div className="w-full md:w-5/12">
              <img
                src="/images/tracking.png"
                alt="Search Illustration"
                className="w-full mb-5"
              />
            </div>
            <div className="w-full md:w-5/12">
              <div className="mb-5">
                <h4 className="text-xl font-bold text-blue-600 mb-4">
                  Track Now
                </h4>
                <p className="text-gray-600">
                  Here’s the fastest way to check the status of your job. Our
                  online results give you real-time, detailed progress as your
                  job moves through our network. Grow your business with Myanmar
                  Pivot Group of Companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrackingHeroSection;
