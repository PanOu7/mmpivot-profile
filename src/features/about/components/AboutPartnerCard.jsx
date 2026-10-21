import { assetImageUrl } from "@/lib/asset";
import React from "react";

const AboutPartnersCard = ({ partner: { logo } }) => {
  return (
    <div className=" border flex flex-col items-center">
      <img
        
        className=" h-16 my-5 px-5"
        src={assetImageUrl(logo.path)}
        alt={logo.altText}
      />
    </div>
  );
};

export default AboutPartnersCard;
