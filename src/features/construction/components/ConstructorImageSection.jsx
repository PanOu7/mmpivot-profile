"use client";
import Container from '@/components/Container'
import React from 'react'
import useConstructions from '../hook/useConstructions'
import { assetImageUrl } from '@/lib/asset'

const ConstructorImageSection = () => {

  const { data } = useConstructions();

  return (
    <section>
      <Container>
        <div className=" columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-6 gap-4">
            {data?.map((images) => (
              <img
                className="cursor-pointer"
                key={images._id}
                src={assetImageUrl(images.image.path)}
                alt={images.image.altText}
              />
            ))}
        </div>
      </Container>
    </section>
  )
}

export default ConstructorImageSection