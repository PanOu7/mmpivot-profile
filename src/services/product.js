export const productApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/products`;
export const productDetailApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/item/products`;
export const productCategoryApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/content/items/productcategories`;

export const fetchProducts = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  }).then((res) => res.json());
