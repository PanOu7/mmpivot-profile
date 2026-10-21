import React from "react";
import { HiSearch, HiX } from "react-icons/hi";
import Link from "next/link";
import { fetchProducts, productCategoryApiUrl } from "@/services/product";
import useSWR from "swr";

const ProductCategory = ({
  searchParams,
  handleSearchInput,
  clearSearchInput,
  searchRef,
}) => {
  const { data, isLoading, error } = useSWR(
    productCategoryApiUrl,
    fetchProducts
  );
  return (
    <div className="">
      <div className=" mb-10">
        <h4 className="text-blue-700 font-bold mb-2 text-lg">Search Product</h4>
        <div>
          {/* <input type="hidden" name="_token" value={} /> */}
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-9 lg:col-span-10 relative">
              <input
                type="text"
                placeholder="Search Product"
                // onChange={handleSearchInput}
                ref={searchRef}
                className="w-full py-1.5 px-3 text-base font-normal border focus:ring-blue-200 focus:ring-4 focus:outline-none"
              />
              {searchParams?.get("filter") && (
                <div
                  onClick={clearSearchInput}
                  className="absolute top-2.5 right-2.5 cursor-pointer"
                >
                  <HiX />
                </div>
              )}
            </div>
            <div className="col-span-3 lg:col-span-2 flex">
              <button
                onClick={handleSearchInput}
                className="cursor-pointer w-full flex justify-center items-center text-white bg-blue-700 border border-blue-500 select-none py-1.5 px-3"
              >
                <HiSearch className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h4 className="text-blue-700 font-bold mb-2 text-lg">
          Product Category List
        </h4>
        <ul className="">
          <li className="">
            <Link
              href="/products/category/all"
              className="bg-white hover:bg-[#ecf5ff] border-l-5 hover:border-l-10 border-blue-700 py-2.5 px-5 block duration-500 text-blue-500 hover:text-[#123cab]"
            >
              All Products
            </Link>
          </li>
          {data?.map((category) => (
            <li key={category._id} className="mt-2.5">
              <Link
                href={`/products/category/${category._id}`}
                className="bg-white hover:bg-[#ecf5ff] border-l-5 hover:border-l-10 border-blue-700 py-2.5 px-5 block duration-500 text-blue-500 hover:text-[#123cab]"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCategory;
