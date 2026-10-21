export const partnerApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/partners`;

export const fetchPartner = (...args) =>
  fetch(...args,{
    method : "GET",
    headers : {
        "api-key" : process.env.NEXT_PUBLIC_TOKEN
    }
  }).then((res) => res.json());
