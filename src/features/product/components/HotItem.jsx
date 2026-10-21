"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assetImageUrl } from "@/lib/asset";
import Link from "next/link";

const HotItem = ({ data }) => {
  const containerRef = useRef(null);
  
  const scrollItems = (direction) => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction * width,
        behavior: 'smooth',
      });
    }
  };

  const styles = {
    flexItem: {
      flex: "0 0 100%",
      scrollSnapAlign: "start",
    }
  }
  return (
    <div className="relative w-full max-w-[600px] overflow-hidden m-auto">
      <h4 className="text-2xl font-bold text-blue-700 mb-4">Hot Items</h4>
      <div ref={containerRef} className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory mb-4 hsb">
        {data.slice(0, 6).map((product) => (
          <div key={product._id} style={styles.flexItem} className='flex flex-col justify-between border border-gray-300 rounded'>
            <img
              src={assetImageUrl(product.image.path)}
              alt={product.image.altText}
              className='rounded-t'
            />
            <div className='p-4'>
              <p className='font-bold line-clamp-1 mb-4'>{product.title}</p>
              <div className='flex justify-between gap-2'>
                <p className='text-sm text-gray-500'>{product.price} MMK</p>
                <Link
                  href={`/products/${product._id}`}
                  className='py-1 px-2 text-sm rounded border border-blue-500 text-blue-500 text-center font-normal select-none hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200'
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button onClick={() => scrollItems(-1)} className="bg-blue-700 hover:bg-blue-800 text-white py-1 px-1.5 rounded focus:outline-none focus:ring-4 focus:ring-blue-300">
          <ChevronLeft className="size-5" />
        </button>
        <button onClick={() => scrollItems(1)} className="bg-blue-700 hover:bg-blue-800 text-white py-1 px-1.5 rounded focus:outline-none focus:ring-4 focus:ring-blue-300">
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default HotItem;
