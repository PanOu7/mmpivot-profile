"use client";
import Container from '@/components/Container';
import { blogApiUrl, fetchBlogs } from '@/services/news'
import React from 'react'

import NewsSkeletonCard from './NewsSkeletonCard';
import NewsCard from './NewsCard';
import useCategory from '../hook/useCategory';
import NotFound from '@/components/NotFound';
import NewsCategoryList from './NewsCategoryList';

const NewsCategorySection = () => {
    const {
        searchRef,
        currentNews,
        NewsLoaing,
        categories,
        NewsError,
        CategoryLoading,
        handleSearchInput,
        clearSearchInput,
        updateUrlParams,
        searchParams,
      } =useCategory();
      if(NewsError){
        return <NotFound/>;
      }
      if (NewsLoaing && CategoryLoading) {
        return <NewsSkeletonCard/>;
      }
  return (
    <section className="my-10">
    <Container className={`grid grid-cols-1 lg:grid-cols-4   px-5 lg:px-0`}>
    <div className="col-span-1  lg:col-span-3">
    <div className="w-full  lg:w-11/12  px-4">
         { NewsLoaing ?(
        <div className="space-y-6">
        {Array(3).fill(0).map((_, index) => (
          <NewsSkeletonCard key={index} />
        ))}
      </div>
         ):(
         currentNews?.map((news) => (
          <NewsCard news={news} key={news._id}   />
        )))
       }
        </div>
      </div>
      <div className="col-span-1">
        <div className="sticky top-2">
        <NewsCategoryList 
               searchParams={searchParams}
               updateUrlParams={updateUrlParams}
               handleSearchInput={handleSearchInput}
               clearSearchInput={clearSearchInput}
               searchRef={searchRef}
               categories={categories}
               CategoryLoading={CategoryLoading}
              />
        </div>
      </div>
         
    </Container>
  
  </section>
  )
}

export default NewsCategorySection