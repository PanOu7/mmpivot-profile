"use client";
import { fetchLogisticsTags, logisticsTagsApiUrl } from "@/services/logistics";
import useSWR from "swr";

const useLogisticsTags = () => {
  const { data, isLoading, error } = useSWR(
    `${logisticsTagsApiUrl}`,
    fetchLogisticsTags
  );

  return {
    data,
    isLoading,
    error,
  };
};

export default useLogisticsTags;
