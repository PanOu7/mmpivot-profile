'use client';
import NewsCard from "./NewsCard";
import NewsCategoryList from "./NewsCategoryList";
import useNews from "../hook/useNews";
import Container from "@/components/Container";
import NewsSkeletonCard from "./NewsSkeletonCard";
import NotFound from "@/components/NotFound";
const NewsHeroSection = () => {
  const {
    searchRef,
    news,
    NewsLoaing,
    categories,
    NewsError,
    CategoryError,
    CategoryLoading,
    handleSearchInput,
    clearSearchInput,
    updateUrlParams,
    searchParams,
  }=useNews()
  if(NewsError &&CategoryError){
    return <NotFound/>
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
           news?.map((news) => (
            <NewsCard news={news} key={news._id} categories={categories}  />
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
   

  );
};

export default NewsHeroSection;
