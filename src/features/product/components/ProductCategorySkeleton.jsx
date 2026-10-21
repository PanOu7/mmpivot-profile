import React from "react";

const ProductCategorySkeleton = () => {
  return (
    <div className="p-4 border border-gray-300 rounded animate-pulse">
      {/* Title */}
      <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>

      {/* Search Form */}
      <div className="grid grid-cols-12 gap-1 mb-4">
        <div className="col-span-9 lg:col-span-10">
          <div className="h-10 bg-gray-300 rounded w-full"></div>
        </div>
        <div className="col-span-3 lg:col-span-2">
          <div className="h-10 bg-gray-300 rounded w-full"></div>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* Category Title */}
      <div className="h-6 w-2/3 bg-gray-300 rounded mb-4"></div>

      {/* Category Items */}
      <ul className="space-y-2.5">
        {[...Array(2)].map((_, idx) => (
          <li key={idx}>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategorySkeleton;
