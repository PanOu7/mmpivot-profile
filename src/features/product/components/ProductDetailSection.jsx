"use client";
import Container from "@/components/Container";
import { assetImageUrl } from "@/lib/asset";
import { useParams } from "next/navigation";
import { Calendar } from "lucide-react";
import { SiMessenger } from "react-icons/si";
import ProductDetailSkeleton from "./ProductDetailSkeleton";
import useSWR from "swr";
import { fetchProducts, productDetailApiUrl } from "@/services/product";
import { formatNumber } from "@/utils/number";
import { formattedDate } from "@/utils/ChangeDateFormat";
import NotFound from "@/components/NotFound";
import ProductRelatedItems from "./ProductRelatedItems";

const ProductDetailSection = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(
    `${productDetailApiUrl}/${id}`,
    fetchProducts
  );

  if (error) return <NotFound />;

  if (isLoading) return <ProductDetailSkeleton />;

  // console.log(data.product_category_id._id);

  return (
    <section className=" my-10">
      <Container className={`grid grid-cols-4 gap-5 md:gap-0`}>
        <div className=" col-span-1"></div>
        <div className="col-span-2">
          <div>
            <h4 className="text-2xl font-bold text-blue-700 mb-4">
              {data.title}
            </h4>
            <div className="flex items-center gap-2 mb-6 text-gray-500">
              <Calendar className="size-4 opacity-50" />
              {formattedDate(data._created)}
              <span className="bg-blue-50 text-blue-600 font-bold text-xs px-2 py-1">
                Home Appliances
              </span>
            </div>
            <div>
              <img
                src={assetImageUrl(data.image.path)}
                alt={data.image?.altText}
                className=" h-80 object-cover"
              />
            </div>
            <div
              className="mt-6 flex flex-col gap-3"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <div className="flex items-center justify-between mt-6">
              <p className="text-md font-bold text-blue-700">
                {formatNumber(data.price)} MMK
              </p>
              <button className=" bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-3 transition-colors cursor-pointer  flex items-center gap-2">
                <SiMessenger /> Order Now
              </button>
            </div>
          </div>
        </div>
        <div className=" col-span-1"></div>

        <div className=" col-span-full">
          {/* <ProductRelatedItems
            productCategoryId={data.product_category_id._id}
            currentProductId={data._id}
          /> */}
        </div>

        {/* <div className="col-span-12 md:col-span-5 pl-5 pr-5 lg:pr-0">
          <div className="sticky top-0">
            <ProductCategory
              searchParams={searchParams}
              handleSearchInput={handleSearchInput}
              clearSearchInput={clearSearchInput}
              searchRef={searchRef}
            />
            <hr className="border border-gray-300 my-4" />
            <HotItem data={data} />
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default ProductDetailSection;
