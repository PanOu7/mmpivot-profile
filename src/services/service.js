export const serviceApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/services`;

export const fetchCounterbk = (...args) =>
  fetch(...args, {
    method: "GET",
    headers: {
      "api-key": process.env.NEXT_PUBLIC_TOKEN,
    },
  }).then((res) => res.json());

export const fetchService = () => {
  return fetch(serviceApiUrl, {
    method: "GET",
    headers: {
      "api-key": process.env.NEXT_PUBLIC_TOKEN,
    },
  });
};
