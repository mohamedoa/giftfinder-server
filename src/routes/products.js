import express from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
} from "../models/product.js";

const router = express.Router();

router
  .route("/")
  .get((_req, res) => {
    res.json(getAllProducts());
  })
  .post((req, res) => {
    try {
      const product = addProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).send(`Couldn't add product: ${error}`);
    }
  });

router
  .route("/:id")
  .get((req, res) => {
    const product = getProductById(req.params.id);

    if (!product) {
      return res.sendStatus(404);
    }

    res.json(product);
  })
  .patch((req, res) => {
    try {
      const newProduct = req.body;

      if (!newProduct.isActive) {
        newProduct.isCaptain = false;
      }

      const product = updateProduct(newProduct);

      res.json(product);
    } catch (error) {
      res.status(400).send(`Couldn't update product: ${error}`);
    }
  });

export default router;
