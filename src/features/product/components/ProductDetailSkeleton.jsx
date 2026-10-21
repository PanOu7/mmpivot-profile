import Container from "@/components/Container";
import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductDetailSkeleton = () => {
  return (
    <section className="mb-2 lg:mb-8 mt-2 animate-pulse">
      <Container className={`grid grid-cols-12 gap-5`}>
        <div className="col-span-12 md:col-span-8 border-r border-gray-300 p-3">
          <div>
            <h4 className="w-100 h-6 bg-gray-200 mb-4 rounded"></h4>
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-gray-100 opacity-50 rounded" />
              <div className="w-30 h-6 bg-gray-100 opacity-50 rounded" />
              <span className="h-6 w-30 bg-gray-100 rounded-full"></span>
            </div>
            <div className="w-full h-96 bg-gray-100 opacity-50 rounded"></div>
            <div className="mt-6 flex flex-col gap-2">
              {[1, 2, 3, 4, 5].map((el) => (
                <div key={el} className="h-5 w-50 bg-gray-100 rounded"></div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="h-8 w-30 bg-gray-100 rounded mb-4"></div>
              <div className="h-8 w-30 bg-gray-100 rounded mb-4"></div>
            </div>
          </div>

          <hr className="border border-gray-300 my-4" />

          <div>
            <h4 className="w-50 h-6 bg-gray-100 mb-4 rounded"></h4>
            <div className="grid grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6].map((el) => (
                <ProductCardSkeleton key={el} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="p-4 border -border-gray-300 rounded">
            <h4 className="w-30 h-6 bg-gray-200 mb-4 rounded"></h4>
            <div className="grid grid-cols-10 gap-2">
              <div className="h-7 w-full col-span-8 border border-gray-400 rounded"></div>
              <div className="h-7 w-full col-span-2 border border-gray-400 rounded bg-gray-100"></div>
            </div>
            <hr className="border border-gray-300 my-4" />
            <h4 className="w-38 h-6 bg-gray-200 mb-4 rounded"></h4>
            <div className="h-6 w-30 bg-gray-400 rounded"></div>
            <div className="h-6 w-30 bg-gray-400 rounded mt-2"></div>
          </div>
          <hr className="border border-gray-300 my-4" />
          <h4 className="w-38 h-6 bg-gray-200 mb-4 rounded"></h4>
          <ProductCardSkeleton />
          <div className="flex gap-2 mt-3">
            <div className="size-7 bg-gray-100 rounded"></div>
            <div className="size-7 bg-gray-100 rounded"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetailSkeleton;
