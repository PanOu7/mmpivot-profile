"use client";
import { useState } from "react";
import Container from "@/components/Container";
import ConstructionSkeletonLoader from "./ConstructionSkeletonLoader";
import ConstructorImageSection from "./ConstructorImageSection";
import ConstructionTags from "./ConstructionTags";
import useConstructionTags from "../hook/useConstructionTags";

const ConstructionHeroSection = () => {
  const { data, isLoading } = useConstructionTags();
  const allTags = [{ title: "All", _id: "all" }, ...(data || [])];
  const [activeCategory, setActiveCategory] = useState("all");

  if (isLoading) {
    return <ConstructionSkeletonLoader />;
  }

  return (
    <section className="mb-3 md:p-0 px-7">
      <Container>
        <h1 className="text-2xl mb-4 font-semibold">Construction</h1>
        <div className="flex bg-white rounded">
          <div className="flex flex-wrap gap-2 sm:gap-4 md:space-y-2 mb-4">
            {allTags?.map((tags) => (
              <ConstructionTags
                tags={tags}
                key={tags._id}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </div>
        </div>
        <ConstructorImageSection />
      </Container>
    </section>
  );
};

export default ConstructionHeroSection;