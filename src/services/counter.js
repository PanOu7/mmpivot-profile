export const counterApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/counters`;

export const fetchCounter = (...args) =>
  fetch(...args,{
    method : "GET",
    headers : {
        "api-key" : process.env.NEXT_PUBLIC_TOKEN
    }
  }).then((res) => res.json());
