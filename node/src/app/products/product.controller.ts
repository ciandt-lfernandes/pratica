import { Router } from "express";
import { allProducts } from "../../domain/product/getAllProducts.usecase";
import { getAllProductsRepository } from "../../infra/repositories/product.repository";

const product = Router();

product.get("/products", async (req, res) => {
  const products = await allProducts({ repository: getAllProductsRepository });
  if (products) {
    res.json(products).status(200);
  } else {
    res.sendStatus(204);
  }
});

export { product };
