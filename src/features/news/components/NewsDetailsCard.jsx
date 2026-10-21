import { assetImageUrl } from "@/lib/asset";
import { getCategoryTitle } from "@/utils/CategoryTitle";
import { formattedDate } from "@/utils/ChangeDateFormat";
import { Calendar } from "lucide-react";
const NewsDetailsCard = ({ news, categories }) => {
  return (
    <div className="bg-white border px-5 py-2 border-stone-300 rounded-md shadow-sm mb-6 overflow-hidden">
      <div className="flex flex-col space-y-6">
        <div className="">
          <h1 className="font-bold mb-3 text-3xl text-blue-700">
            {news?.title}
          </h1>
          <div className="flex  items-center gap-2">
            <p className="mb-3 text-gray-500 inline-flex gap-1">
              <Calendar />
              {formattedDate(news?._created)}
            </p>
            <span className="bg-gray-200 self-start mt-1 text-blue-700 font-bold rounded-full px-3 text-xs">
              {getCategoryTitle(news?.cagetory_id?._id, categories)}
            </span>
          </div>
          <div className="flex gap-1 flex-nowrap overflow-x-scroll">
            {news?.image?.map((image, index) => (
              <img
                key={index}
                src={image ? assetImageUrl(image.path) : "dafault.jpg"}
                className=" w-[60%]    rounded-lg object-cover object-center"
                alt={image?.[0]?.altText || "title"}
              />
            ))}
          </div>
          <div
            className="mb-4 "
            dangerouslySetInnerHTML={{ __html: news?.desciption }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
