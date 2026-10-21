"use client";
import { assetImageUrl } from "@/lib/asset";
import { getCategoryTitle } from "@/utils/CategoryTitle";
import { formattedDate } from "@/utils/ChangeDateFormat";
import { formatDescription } from "@/utils/DescriptionFormat";
import { Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";

const NewsCard = ({
  news: { title, desciption, image, _created, cagetory_id, _id },categories
}) => {
  return (
    <div className="bg-white border border-stone-300 rounded-md shadow-sm mb-6 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-4/12 px-4 pb-4 lg:pb-0">
            <img
              src={image ? assetImageUrl(image[0].path) : "dafault.jpg"}
              className="w-full h-full rounded-lg object-cover object-center"
              alt={image?.[0]?.altText || title}
            />
          </div>
          <div className="w-full md:w-8/12 px-4">
            <h4 className="font-bold mb-3 text-3xl text-blue-700">{title}</h4>
            <p className="mb-3 text-gray-500 inline-flex gap-1">
              <Calendar />
              {formattedDate(_created)}
            </p>
            <div
              className="mb-4 prose truncate"
              dangerouslySetInnerHTML={{ __html: formatDescription(desciption,50,10) }}
            />
            <div className="flex justify-between items-center">
              <div>
                <span className="bg-gray-200 text-blue-700 font-extrabold rounded-full px-3 py-1 text-sm">
                  {getCategoryTitle(cagetory_id?._id, categories)}
                </span>
              </div>
              <Link
                href={`/news/${_id}`}
                className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
