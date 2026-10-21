export const manufacturingTagsApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/manufacturetags`;
export const manufacturingApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/manufacture`;

export const fetchManufacturingTags = (...args) =>
  fetch(...args, {
    method: "GET",
    headers: {
      "api-key": process.env.NEXT_PUBLIC_TOKEN,
    },
  }).then((res) => res.json());

export const fetchManufacturing = (...args) =>
  fetch(...args, {
    method: "GET",
    headers: {
      "api-key": process.env.NEXT_PUBLIC_TOKEN,
    },
  }).then((res) => res.json());
