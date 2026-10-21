import { fetchProducts, productApiUrl } from "@/services/product";
import { convertSearchPramsToObject } from "@/utils/url";
import { debounce } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const useProduct = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef();
  const [fetchUrl, setFetchUrl] = useState(productApiUrl);

  const updateUrlParams = (newParams) => {
    const updatedSearch = new URLSearchParams(newParams).toString();
    router.push(`?${updatedSearch}`);
    setFetchUrl(`${productApiUrl}?${updatedSearch}`);
  };

  useEffect(() => {
    const currentParams = convertSearchPramsToObject(searchParams);
    const queries = new URLSearchParams(currentParams).toString();
    setFetchUrl(`${productApiUrl}?${queries}`);

    // JSON.parse(searchParams.get("filter")).title.$regex

    // console.log(JSON.parse(currentParams.filter).title.$regex);

    if (searchRef.current) {
      if (currentParams.filter) {
        searchRef.current.value = JSON.parse(currentParams.filter).title.$regex;
      } else {
        searchRef.current.value = "";
      }
    }
  }, [searchParams]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchProducts);

  const handleSearchInput = () => {
    const q = searchRef.current.value;
    const query = JSON.stringify({
      title: { $regex: q, $options: "i" },
    });
    if (query) {
      updateUrlParams({
        ...convertSearchPramsToObject(searchParams),
        filter: query,
      });
    } else {
      updateUrlParams({});
    }
  };

  const clearSearchInput = () => {
    searchRef.current.value = "";
    updateUrlParams({});
  };

  return {
    searchRef,
    data,
    isLoading,
    error,
    handleSearchInput,
    clearSearchInput,
    updateUrlParams,
    searchParams,
  };
};

export default useProduct;
