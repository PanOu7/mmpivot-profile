import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { HiSearch, HiX } from 'react-icons/hi'

const NewsCategoryList = ({
  searchParams,
  handleSearchInput,
  clearSearchInput,
  searchRef,
  categories,
  CategoryLoading
}) => {
  return (
    <div className="">
    <div className=" mb-10">
      <h4 className="text-blue-700 font-bold mb-2 text-lg">Search News</h4>
      <div>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-9 lg:col-span-10 relative">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search News"
              className="w-full py-1.5 px-3 text-base font-normal border focus:ring-blue-200 focus:ring-4 focus:outline-none"
            />
            {
              searchParams?.get("filter") && (
                <div
                  onClick={clearSearchInput}
                  className="absolute top-2.5 right-2.5 cursor-pointer"
                >
                  <HiX />
                </div>
              )
            }
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
        News Category List
      </h4>
      <ul className="">
        <li className="">
          <Link
            href="/news"
            className="bg-white hover:bg-[#ecf5ff] border-l-5 hover:border-l-10 border-blue-700 py-2.5 px-5 block duration-500 text-blue-500 hover:text-[#123cab]"
          >
            All Products
          </Link>
        </li>

        {
        CategoryLoading ? (
          Array(3).fill(0).map((_, index) => (
            <li className="mt-2.5 animate-pulse" key={index}>
            <div className="bg-gray-100 hover:bg-gray-100 py-4 px-5 block">
            </div>
          </li>
          ))
        ):(categories?.map((category) => (
            <li key={category._id} className="mt-2.5">
              <Link
                href={`/news/category/${category._id}`}
                className="bg-white hover:bg-[#ecf5ff] border-l-5 hover:border-l-10 border-blue-700 py-2.5 px-5 block duration-500 text-blue-500 hover:text-[#123cab]"
              >
                {category.title}
              </Link>
            </li>
          ))
        )
        }
      </ul>
    </div>
  </div>
  )
}

export default NewsCategoryList