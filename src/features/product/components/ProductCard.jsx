import { assetImageUrl } from "@/lib/asset";
import { formatNumber } from "@/utils/number";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product: { image, title, price, _id } }) => {
  return (
    <div className="flex flex-col justify-between border border-gray-300 ">
      <img src={assetImageUrl(image.path)} alt={image.altText} className="" />
      <div className="p-4">
        <p className="font-bold line-clamp-1 mb-4">{title}</p>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
          <p className="text-sm text-gray-500">{formatNumber(price)} MMK</p>
          <Link
            href={`/products/${_id}`}
            className="py-1 w-full lg:w-auto px-2 text-sm  border border-blue-500 text-blue-500 text-center font-normal select-none hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
