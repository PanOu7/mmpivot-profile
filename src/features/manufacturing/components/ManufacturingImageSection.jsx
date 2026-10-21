"use client";

import Container from "@/components/Container";
import useManufacturing from "../hook/useManufacturing";
import { assetImageUrl } from "@/lib/asset";

const ManufacturingImageSection = () => {
  const { data } = useManufacturing();

  return (
    <section>
      <Container>
        <div>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-6 space-y-2">
            {data?.map(({ images: { path, altText } }, index) => (
              <img
                className="cursor-pointer"
                key={index}
                src={assetImageUrl(path)}
                alt={altText}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ManufacturingImageSection;
