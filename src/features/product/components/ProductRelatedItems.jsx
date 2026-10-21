import React from "react";
import ProductCard from "./ProductCard";
import useSWR from "swr";
import { productApiUrl } from "@/services/product";

const ProductRelatedItems = ({ productCategoryId, currentProductId }) => {
  console.log(productCategoryId, currentProductId);

  const { data, isLoading, error } = useSWR(
    `${productApiUrl}?limit=8&sort={ "_created": -1 }&populate=1&filter={"product_creategory" }}`
  );

  return <></>;

  return (
    <div>
      <h4 className="text-2xl font-bold text-blue-700 mb-4">Related Items</h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="col-span-2 lg:col-span-3 hidden last:flex flex-col justify-center items-center h-32">
          There is no product
        </div>
        {data?.slice(0, 6).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductRelatedItems;
