"use client";
import NewsCategoryList from "./NewsCategoryList";
import NewsDetailsCard from "./NewsDetailsCard";
import NewsSkeletonLoader from "./NewsLoader";
import useNews from "../hook/useNews";
import Container from "@/components/Container";
import NotFound from "@/components/NotFound";

const NewsDetailSection = () => {
  const {
    searchRef,
    news,
    NewsLoaing,
    categories,
    NewsError,
    CategoryLoading,
    handleSearchInput,
    clearSearchInput,
    updateUrlParams,
    searchParams,
  } =useNews();
  if(NewsError){
    return <NotFound/>;
  }
  if (NewsLoaing && CategoryLoading) {
    return <NewsSkeletonLoader />;
  }
  return (
    <section className="py-10">
      <Container  className={`grid grid-cols-1 lg:grid-cols-4   px-5 lg:px-0`} >
      <div className="col-span-1  lg:col-span-3">
      <div className="w-full  lg:w-11/12 px-4  ">
        <NewsDetailsCard
          news={news}
          categories={categories}
        />
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
          />
          </div>
        </div>
      </Container>

    </section>
  );
};

export default NewsDetailSection;
