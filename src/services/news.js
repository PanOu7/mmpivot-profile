export const blogApiUrl=`${process.env.NEXT_PUBLIC_BASE_URL}/content/items/blogs`
export const CategoryApiUrl=`${process.env.NEXT_PUBLIC_BASE_URL}/content/items/categories`
export const blogIdApiUrl=`${process.env.NEXT_PUBLIC_BASE_URL}/content/item/blogs`
export  const CategoryPathName=`/news/category`;
export const fetchBlogs = (...args) =>
  fetch(...args,{
    method : "GET",
    headers : {
        "api-key" : process.env.NEXT_PUBLIC_TOKEN
    }
  }).then((res) => res.json());

  export const fetchCategoryBlogs = (...args) =>
    fetch(...args,{
      method : "GET",
      headers : {
          "api-key" : process.env.NEXT_PUBLIC_TOKEN
      }
    }).then((res) => res.json());