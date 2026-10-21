import { assetImageUrl } from "@/lib/asset";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className=" group">
      <div className="  w-full h-64 overflow-hidden ">
        <img
          src={assetImageUrl(service?.image?.path)}
          className=" size-full object-center object-cover group-hover:scale-125 duration-300"
          alt=""
        />
      </div>

      <div className="px-4 flex justify-between items-end">
        <h3 className="   text-2xl font-bold font-heading">{service?.title}</h3>
        <Link
          className="  flex items-center duration-300 -translate-y-5 active:scale-95 font-semibold text-xl font-heading uppercase border-3 px-6 h-10   border-blue-600 text-blue-600"
          href={service?.path}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
