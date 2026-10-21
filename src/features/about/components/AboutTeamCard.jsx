"use client";

import { assetImageUrl } from "@/lib/asset";

const AboutTeamCard = ({ team: { name, position, image } }) => {
  return (
    <div className=" flex flex-col items-center ">
      <img
        className=" h-32 mb-3 border-2 rounded-full border-blue-600 p-0.5"
        src={assetImageUrl(image.path)}
        alt={image.altText}
      />
      <p className=" font-bold uppercase">{name}</p>
      <p className=" text-blue-500 text-xs">{position}</p>
    </div>
  );
};

export default AboutTeamCard;
