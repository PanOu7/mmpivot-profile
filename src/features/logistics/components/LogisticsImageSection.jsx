"use client";
import { fetchLogistics, logisticsApiUrl } from "@/services/logistics";
import React, { useState } from "react";
import LogisticsImageCard from "./LogisticsImageCard";
import useLogistics from "../hook/useLogistics";
import Container from "@/components/Container";
import LogisticsSkeletonLoader from "./LogisticsSkeletonLoader";

const LogisticsImageSection = () => {
  // const { data, isLoading, error } = useSWR(
  //   `${logisticsApiUrl}`,
  //   fetchLogistics
  // );

  const { data, isLoading } = useLogistics();

  return (
    <section>
      <Container>
        {data?.length > 0 ? (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-6 space-y-2">
            {data.map((product) => (
              <LogisticsImageCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          isLoading ? (
            <LogisticsSkeletonLoader/>
          ) : (
               <p className="text-gray-500">No images available.</p>
          )
        )
      

          
      }
          </Container>
           
          
       
        
    </section>
  );
};

export default LogisticsImageSection;
