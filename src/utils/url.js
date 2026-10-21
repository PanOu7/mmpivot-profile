export const convertSearchPramsToObject = (searchParams) => {
  return Object.fromEntries(searchParams.entries());
};