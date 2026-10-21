"use client";
import {
  constructionTagsApiUrl,
  fetchConstructionTags,
} from "@/services/construction";
import useSWR from "swr";

const useConstructionTags = () => {
  const { data, isLoading, error } = useSWR(
    constructionTagsApiUrl,
    fetchConstructionTags
  )
  return {
    data,
    isLoading,
    error,
  };
};

export default useConstructionTags;