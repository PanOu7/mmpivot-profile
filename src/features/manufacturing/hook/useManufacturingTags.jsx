"use client";
import {
  fetchManufacturingTags,
  manufacturingTagsApiUrl,
} from "@/services/manufacturing";
import useSWR from "swr";

const useManufacturingTags = () => {
  const { data, isLoading, error } = useSWR(
    manufacturingTagsApiUrl,
    fetchManufacturingTags
  );
  return {
    data,
    isLoading,
    error,
  };
};

export default useManufacturingTags;
