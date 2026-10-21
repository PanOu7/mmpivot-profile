"use client";
import { fetchLogistics, logisticsApiUrl } from "@/services/logistics";
import useSWR from "swr";

const useLogistics = () => {
  const { data, isLoading, error } = useSWR(
    `${logisticsApiUrl}`,
    fetchLogistics
  );
  return {
    data,
    isLoading,
    error,
  };
};

export default useLogistics;
