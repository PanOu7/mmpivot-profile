import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded animate-pulse">
      <div className="h-64 bg-gray-100 rounded-t"></div>{" "}
      {/* Image placeholder */}
      <div className="p-4">
        <div className="h-5 bg-gray-200 rounded mb-4 w-3/4"></div>{" "}
        {/* Title placeholder */}
        <div className="flex justify-between gap-2">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>{" "}
          {/* Price placeholder */}
          <div className="h-8 w-20 bg-gray-200 rounded border border-gray-200"></div>{" "}
          {/* Button placeholder */}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
