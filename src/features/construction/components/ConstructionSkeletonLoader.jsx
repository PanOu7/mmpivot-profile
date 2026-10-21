"use client";
import Container from "@/components/Container";

const ConstructionSkeletonLoader = () => {
  return (
    <section>
        <Container>
        <div className="p-4 space-y-4 animate-pulse">
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-8 w-24 bg-gray-300 rounded-sm"></div>
        ))}
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-6 space-y-2">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="h-48 bg-gray-300"></div>
        ))}
      </div>
    </div>
    </Container>
    </section>
    
  );
};

export default ConstructionSkeletonLoader;
