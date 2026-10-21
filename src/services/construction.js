export const constructionTagsApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/constructiontags`
export const constructionsApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/constructions`


export const fetchConstructionTags = (...args) =>
  fetch(...args,{
    method : "GET",
    headers : {
        "api-key" : process.env.NEXT_PUBLIC_TOKEN
    }
  }).then((res) => res.json());

  export const fetchConstructions = (...args) =>
  fetch(...args,{
    method : "GET",
    headers : {
        "api-key" : process.env.NEXT_PUBLIC_TOKEN
    }
  }).then((res) => res.json());

