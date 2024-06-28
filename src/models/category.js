import { categories } from "../../data/data.js";

const getAllCategories = () =>
  categories.filter((category) => category.abbreviation !== "ccs");

const getCategoryById = (id) => {
  if (typeof id !== "number") {
    id = Number(id);
  }

  return categories.find((category) => category.id === id);
};

export { getAllCategories, getCategoryById };
