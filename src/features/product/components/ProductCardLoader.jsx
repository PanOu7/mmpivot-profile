"use client";

import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductCardLoader = () => {
  return (
    <>
      {Array.from({ length: 9 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </>
  );
};

export default ProductCardLoader;
