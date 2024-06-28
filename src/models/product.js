import {
  mapProductFieldsForClient,
  mapProductFieldsForDatabase,
} from "../utils/product.js";

import { products } from "../../data/data.js";

const getAllProducts = () =>
  products.map((product) => mapProductFieldsForClient(product));

const getProductById = (id) => {
  if (typeof id !== "number") {
    id = Number(id);
  }

  return mapProductFieldsForClient(
    products.find((product) => product.id === id)
  );
};

const getProductsByCategoryId = (categoryId) => {
  if (typeof categoryId !== "number") {
    categoryId = Number(categoryId);
  }

  return products
    .filter((product) => product.category.id === categoryId)
    .map((product) => mapProductFieldsForClient(product));
};

const getNextId = () => Math.max(...products.map((product) => product.id)) + 1;

const addProduct = (productData) => {
  productData.id = getNextId();
  products.push(productData);

  return getProductById(productData.id);
};

const updateProduct = (productData) => {
  const productIndex = products.findIndex(
    (product) => product.id === productData.id
  );

  const updatedproduct = {
    ...products[productIndex],
    ...mapProductFieldsForDatabase(productData),
  };

  products[productIndex] = updatedproduct;

  return getProductById(productData.id);
};

export {
  getAllProducts,
  getProductById,
  getProductsByCategoryId,
  addProduct,
  updateProduct,
};
