import Container from '@/components/Container'
import ProductCard from '@/features/product/components/ProductCard';
import ProductCardSkeleton from '@/features/product/components/ProductCardSkeleton';
import ProductCategory from '@/features/product/components/ProductCategory';
import ProductsPagination from '@/features/product/components/ProductsPagination';
import useProduct from '@/features/product/hook/useProduct';
import { useParams } from 'next/navigation';
import React from 'react'

const CategorySection = () => {
  const { id } = useParams();
  const {
    searchRef,
    data,
    isLoading,
    error,
    handleSearchInput,
    clearSearchInput,
    updateUrlParams,
    searchParams,
  } = useProduct();

  if(error) return <Container className={`grow flex flex-col justify-center items-center`}>Something went wrong</Container>;

  const currentProducts = data?.filter((product) => product.product_category_id._id === id || id == "all")
  return (
    <section className='my-3'>
      <Container className={`grid grid-cols-12 gap-5 md:gap-0`}>
        <div className="col-span-12 md:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5 pr-5 pl-5 lg:pl-0 border-r border-gray-300">
          <div className="col-span-2 lg:col-span-3 hidden last:flex flex-col justify-center items-center">There is no product</div>
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map((el) => <ProductCardSkeleton key={el} />)
            : data?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
          }
        </div>
        <div className="col-span-12 md:col-span-5 pl-5 pr-5 lg:pr-0">
          <div className="sticky top-2">
            <ProductCategory
              searchParams={searchParams}
              handleSearchInput={handleSearchInput}
              clearSearchInput={clearSearchInput}
              searchRef={searchRef}
            />
            <ProductsPagination />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CategorySection