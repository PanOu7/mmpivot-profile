export const logisticsApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/logistics`;
export const logisticsTagsApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/logisticstags`;


export const fetchLogistics = (...args) =>
  fetch(...args,{
    method : "GET",
    headers : {
        "api-key" : process.env.NEXT_PUBLIC_TOKEN
    }
  }).then((res) => res.json());


  

export const fetchLogisticsTags = (...args) =>
  fetch(...args,{
    method : "GET",
    headers : {
        "api-key" : process.env.NEXT_PUBLIC_TOKEN
    }
  }).then((res) => res.json());
