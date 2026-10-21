"use client";
import {
  fetchManufacturing,
  manufacturingApiUrl,
} from "@/services/manufacturing";
import useSWR from "swr";

const useManufacturing = () => {
  const { data, isLoading, error } = useSWR(
    manufacturingApiUrl,
    fetchManufacturing
  );
  return {
    data,
    isLoading,
    error,
  };
};

export default useManufacturing;
