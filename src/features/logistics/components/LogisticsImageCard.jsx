import { assetImageUrl } from "@/lib/asset";
import React from "react";

const LogisticsImageCard = ({ product: { _id, title, image, price } }) => {
  return (
    <div className="flex flex-col justify-between items-center ">
      <img
        src={assetImageUrl(image.path)}
        alt={Image.altText}
        className="round_t"
      />
    </div>
  );
};

export default LogisticsImageCard;
