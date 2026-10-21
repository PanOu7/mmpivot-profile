"use client";
import { useState } from "react";
import useManufacturingTags from "../hook/useManufacturingTags";
import ManufacturingTagBar from "./ManufacturingTagBar";
import Container from "@/components/Container";
import ManufacturingImageSection from "./ManufacturingImageSection";
import ManufacturingSkeletonLoader from "./ManufacturingSkeletonLoader";

const ManufacturingHeroSection = () => {
  const { data, isLoading } = useManufacturingTags();
  const allTags = [{ title: "All", _id: "all" }, ...(data || [])];
  const [activeCategory, setActiveCategory] = useState("all");
  if (isLoading) {
    return <ManufacturingSkeletonLoader />;
  }
  return (
    <section className="mb-3 md:p-0 px-7">
      <Container>
        <h1 className="text-2xl mb-4 font-semibold">Manufacturing</h1>
        <div className="flex bg-white rounded">
          {/* Manufacturing Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-4 md:space-y-2 mb-4">
            {allTags?.map((tags) => (
              <ManufacturingTagBar
                tags={tags}
                key={tags._id}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </div>
        </div>
        {/* Manufacturing Images */}
        <ManufacturingImageSection />
      </Container>
    </section>
  );
};

export default ManufacturingHeroSection;
