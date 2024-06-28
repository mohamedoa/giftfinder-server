import express from "express";
import { getAllCategories, getCategoryById } from "../models/category.js";
import { getProductsByCategoryId } from "../models/product.js";

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(getAllCategories());
});

router.get("/:id/products", (req, res) => {
  let category = getCategoryById(req.params.id);

  if (!category) {
    return res.sendStatus(404);
  }

  category.products = getProductsByCategoryId(category.id);
  res.json(category);
});
// HELLO

export default router;
