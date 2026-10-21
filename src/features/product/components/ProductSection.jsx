"use client";

import Container from "@/components/Container";
import useProduct from "../hook/useProduct";
import ProductCard from "./ProductCard";
import ProductCategory from "./ProductCategory";
import ProductCardLoader from "./ProductCardLoader";

const ProductSection = () => {
  const {
    searchRef,
    data,
    isLoading,
    error,
    handleSearchInput,
    clearSearchInput,
    updateUrlParams,
    searchParams,
  } = useProduct();

  return (
    <section className="my-10">
      <Container
        className={`grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10 px-5 lg:px-0`}
      >
        <div className=" col-span-1 lg:col-span-3">
          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5">
            <div className=" col-span-full">
              <h4 className="text-blue-700 font-bold  -mb-3 text-lg">
                Our Product List{" "}
              </h4>
            </div>
            {isLoading ? (
              <ProductCardLoader />
            ) : (
              data?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>
        </div>

        <div className=" col-span-1">
          <div className="sticky top-2">
            <ProductCategory
              searchParams={searchParams}
              handleSearchInput={handleSearchInput}
              clearSearchInput={clearSearchInput}
              searchRef={searchRef}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
