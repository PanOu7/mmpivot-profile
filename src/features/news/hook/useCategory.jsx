"use client";
import { blogApiUrl, blogIdApiUrl, CategoryApiUrl, fetchBlogs, fetchCategoryBlogs,  } from "@/services/news";
import { convertSearchPramsToObject } from "@/utils/url";
import { useSearchParams,useRouter, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const useCategory = () => {
    const {id}=useParams()
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchRef = useRef();
  const [fetchUrl, setFetchUrl] = useState(blogApiUrl);
//   const fetchingUrl=id ? `${blogIdApiUrl}/${id}`:fetchUrl;
  const updateUrlParams = (newParams) => {
    const updatedSearch = new URLSearchParams(newParams).toString();
    router.push(`?${updatedSearch}`);
    setFetchUrl(`${blogApiUrl}?${updatedSearch}`);
  };

  useEffect(() => {
    const currentParams = convertSearchPramsToObject(searchParams);
    const queries = new URLSearchParams(currentParams).toString();
    setFetchUrl(`${blogApiUrl}?${queries}`);

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

  const { data:news, isLoading:NewsLoaing, error:NewsError } = useSWR(fetchUrl , fetchBlogs);
  const currentNews = news?.filter((product) => product.cagetory_id._id === id || id == "all")
  const{data:categories,isLoading:CategoryLoading,error:CategoryError}=useSWR(CategoryApiUrl,fetchCategoryBlogs)
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
    currentNews,
    categories,
    CategoryLoading,
    NewsLoaing,
    NewsError,
    CategoryError,
    handleSearchInput,
    clearSearchInput,
    updateUrlParams,
    searchParams,
  };
};
export default useCategory;
