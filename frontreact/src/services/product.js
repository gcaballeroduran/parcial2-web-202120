const DOMAIN = 'http://localhost:3001';
const SERVER_API_PRODUCT = `${DOMAIN}/api/products`;

const searchProductsURL = (searchKey) =>
  `${SERVER_API_PRODUCT}?q=${encodeURIComponent(searchKey)}`;

/**
 * Call api for searching products by query
 * @param {*} query
 */
export const getProductsService = (query) => {
  return fetch(searchProductsURL(query)).then(getJSON);
};

const getJSON = (response) => response.json();

export default { getProductsService };
