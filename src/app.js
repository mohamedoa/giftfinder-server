import "dotenv/config";
import express from "express";
import cors from "cors";
import products from "./routes/products.js";
import categories from "./routes/categories.js";

const app = express();
const PORT = process.env.PORT ?? 8081;

app.use(cors());
app.use(express.json());
app.use(express.static("assets"));

app.use("/products", products);
app.use("/categories", categories);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
