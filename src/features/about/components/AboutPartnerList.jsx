"use client";

import { fetchPartner, partnerApiUrl } from "@/services/partner";
import useSWR from "swr";
import AboutPartnersCard from "./AboutPartnerCard";

const AboutPartnerList = () => {
  const { data, isLoading } = useSWR(`${partnerApiUrl}?limit=8&sort={ "_created": -1 }`, fetchPartner);
  if (isLoading) {
    return <></>;
  }


  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 p-5 lg:px-0">
      {data.map((el) => (
        <AboutPartnersCard key={el._id} partner={el} />
      ))}
    </div>
  );
};

export default AboutPartnerList;
