"use client";
import {
  constructionsApiUrl,
  fetchConstructions,
} from "@/services/construction";
import useSWR from "swr";

const useConstructions = () => {
  const { data, isLoading, error } = useSWR(
    constructionsApiUrl,
    fetchConstructions
  )
  return {
    data,
    isLoading,
    error,
  };
};

export default useConstructions;