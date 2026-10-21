"use client";
import { useState } from "react";
import Container from "@/components/Container";
import useLogisticsTags from "../hook/useLogisticsTags";
import LogisticsTags from "./LogisticsTags";
import LogisticsSkeletonLoader from "./LogisticsSkeletonLoader";

const LogisticsHeroSection = () => {
  const { data, isLoading, error } = useLogisticsTags();
  const allTags = [
    { title: "All", _id: "all" },
    ...(Array.isArray(data) ? data : []),
  ];

  const [activeCategory, setActiveCategory] = useState("All");


  return (
    <section className="mb-3 md:p-0 p-7">
      <Container>
        <h1 className="text-2xl mb-4 font-semibold">Logistics</h1>
        <div className="flex  bg-white rounded ">
          <div className="flex flex-wrap gap-2 sm:gap-4 md:space-y-2 mb-4">
            {allTags?.map((tags) => (
              <LogisticsTags
                tags={tags}
                key={tags._id}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LogisticsHeroSection;
